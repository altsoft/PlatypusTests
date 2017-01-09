/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eas.client.application;

import com.eas.client.scripts.ScriptedResource;
import com.eas.script.Scripts;
import com.eas.script.SystemJSCallback;
import java.util.concurrent.atomic.AtomicReference;
import java.util.logging.Level;
import java.util.logging.Logger;
import jdk.nashorn.api.scripting.AbstractJSObject;
import jdk.nashorn.api.scripting.JSObject;
import jdk.nashorn.internal.runtime.ECMAException;
import static org.junit.Assert.fail;

/**
 *
 * @author mg
 */
public class ScriptedTests {

    protected void start(String aTestModuleName, long aTimeout) throws InterruptedException {
        Object success = new Object();
        Object failure = new Object();
        long started = System.currentTimeMillis();
        AtomicReference<Object> completion = new AtomicReference();
        withFacade(completion, () -> {
            try {
                ScriptedResource.require(new String[]{aTestModuleName}, null, new AbstractJSObject() {
                    @Override
                    public Object call(final Object thiz, final Object... args) {
                        JSObject testModule = Scripts.getSpace().lookup(aTestModuleName);
                        JSObject testInstance = (JSObject) testModule.newObject();
                        JSObject execute = (JSObject) testInstance.getMember("execute");
                        try {
                            execute.call(testInstance, new Object[]{new SystemJSCallback() {
                                @Override
                                public Object call(final Object thiz, final Object... args) {
                                    completion.set(success);
                                    return null;
                                }
                            }, new SystemJSCallback() {
                                @Override
                                public Object call(final Object thiz, final Object... args) {
                                    completion.set(args.length > 0 ? args[0] : failure);
                                    return null;
                                }
                            }});
                        } catch (ECMAException ex) {
                            completion.set(ex);
                        }
                        return null;
                    }

                }, new AbstractJSObject() {
                    @Override
                    public Object call(final Object thiz, final Object... args) {
                        completion.set(args[0]);
                        return null;
                    }
                });
            } catch (Exception ex) {
                Logger.getLogger(ScriptedTests.class.getName()).log(Level.SEVERE, null, ex);
                completion.set(ex);
            }
        });
        while (completion.get() == null && System.currentTimeMillis() < started + aTimeout) {
            Thread.sleep(10);
        }
        Object lastChance = completion.get();
        if (lastChance != success) {
            String failedText = aTestModuleName + " failed due to ";
            if (lastChance == null) {
               fail(failedText + "a timeout");
            } else if (lastChance == failure) {
                fail(failedText + "an unknown problem");
            } else if (lastChance instanceof Throwable) {
                fail(failedText + lastChance.toString());
            } else if (lastChance instanceof JSObject) {
                fail(failedText + Scripts.getSpace().toJson(lastChance));
            }else{
                fail(failedText + lastChance.toString());
            }
        }
    }

    private void withFacade(AtomicReference<Object> aCompletion, Runnable withFacade) {
        Scripts.getSpace().process(() -> {
            try {
                if (Scripts.getSpace().getDefined().containsKey("facade")) {
                    withFacade.run();
                } else {
                    ScriptedResource.require(new String[]{"facade"}, null, new AbstractJSObject() {
                        @Override
                        public Object call(final Object thiz, final Object... args) {
                            JSObject facade = Scripts.getSpace().lookup("facade");
                            JSObject cacheBust = (JSObject) facade.getMember("cacheBust");
                            cacheBust.call(facade, new Object[]{true});
                            JSObject export = (JSObject) facade.getMember("export");
                            export.call(facade, new Object[]{Scripts.getSpace().getGlobal()});
                            withFacade.run();
                            return null;
                        }
                    }, new AbstractJSObject() {
                        @Override
                        public Object call(final Object thiz, final Object... args) {
                            aCompletion.set(args[0]);
                            return null;
                        }
                    });
                }
            } catch (Exception ex) {
                aCompletion.set(ex);
            }
        });
    }
}
