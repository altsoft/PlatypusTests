/**
 * @name 131772164687614
*/
const clColor = java.awt.Color;
const clComponent = java.awt.Component;
const clDefaultKeyboardFocusManager = java.awt.DefaultKeyboardFocusManager;
const clDimension = java.awt.Dimension;
const clFont = java.awt.Font;
const clFontMetrics = java.awt.FontMetrics;
const clGraphics = java.awt.Graphics;
const clKeyEventDispatcher = java.awt.KeyEventDispatcher;
const clActionEvent = java.awt.event.ActionEvent;
const clKeyEvent = java.awt.event.KeyEvent;
const clMouseAdapter = java.awt.event.MouseAdapter;
const clMouseEvent = java.awt.event.MouseEvent;
const clIcon = javax.swing.Icon;
const clJMenu = javax.swing.JMenu;

function PictMenu(aPict, aTitle) 
{
	this.icon = aPict;
	this.title = aTitle;
	
    this.DEFAULT_WIDTH = 50;
    this.DEFAULT_HEIGHT = 24;
    this.TOP_DROP = 7;
    this.PICT_DROP = 10;
    this.BOTTOM_DROP = 7;
    this.STR_DROP = 10;
    this.BETWEEN_DROP = 0;
    this.px = 0;
    this.py = 0;
    this.sx = 0;
    this.sy = 0;
	
	this.menu = new JavaAdapter(clJMenu, {	
		paintComponent : function(g) 
		{
			this.super$paintComponent(g);
			if (this.isSelected()) 
			{
				g.setColor(new clColor(244, 244, 244));
				g.fillRect(0, 0, this.getWidth(), this.getHeight());
          
				g.setColor(cColor.WHITE);
				g.drawLine(0, 0, this.getWidth() - 1, 0);
				g.drawLine(0, 1, this.getWidth() - 2, 1);
				g.drawLine(0, 2, this.getWidth() - 3, 2);

				g.drawLine(0, 0, 0, this.getHeight() - 1);
				g.drawLine(1, 0, 1, this.getHeight() - 2);
				g.drawLine(2, 0, 2, this.getHeight() - 3);

				g.setColor(clColor.BLACK);
				g.drawLine(1, this.getHeight() - 1, this.getWidth() - 1, this.getHeight() - 1);
				g.drawLine(this.getWidth() - 1, 1, this.getWidth() - 1, this.menu.getHeight() - 1);

				g.setColor(new clColor(204, 204, 204));
				g.drawLine(2, this.getHeight() - 2, this.getWidth() - 2, this.getHeight() - 2);
				g.drawLine(this.getWidth() - 2, 2, this.getWidth() - 2, this.getHeight() - 2);

				g.setColor(new clColor(224, 224, 224));
				g.drawLine(3, this.getHeight() - 3, this.getWidth() - 3, this.getHeight() - 3);
				g.drawLine(this.getWidth() - 3, 3, this.getWidth() - 3, this.getHeight() - 3);

				g.setColor(cllColor.BLACK);
				if (icon != null) 
					icon.paintIcon(this, g, px + 1, py + 1);
				if (title != null && title.length > 0) 
        	        g.drawString(title, sx + 1, sy + 1);
			}else 
			{
				if (this.icon != null) 
					this.icon.paintIcon(this, g, this.px, this.py);
				if (this.title != null && this.title.length > 0) 
					g.drawString(this.title, this.sx, this.sy);
			}
		}
	});	
	this.menu.icon = this.icon;
	this.menu.title = this.title	
	this.menu.px = this.px;
	this.menu.py = this.py;
	this.menu.sx = this.sx
	this.menu.sy = this.sy;			
	
	this.menu.getPopupMenu().setPreferredSize(new clDimension(0, 0));	
	
	var dim = computeSize(this);
	this.menu.setPreferredSize(dim);
	this.menu.setMinimumSize(dim);
	this.menu.setSize(dim);
    
    var lMouseListener = new JavaAdapter(clMouseAdapter, {
		mouseClicked : function(e) 
		{
			this.super$mouseClicked(e);
			var ae = new clActionEvent(e.getSource(), e.getID(), this.getActionCommand(), e.getWhen(), e.getModifiers());
			var als = this.getActionListeners();
			for (var i = 0; i < als.length; i++)
//				getActionListeners()[i].actionPerformed(ae);
				als[i].actionPerformed(ae);
			var kev = new clKeyEvent(e.getSource(), 401, 1, 0, clKeyEvent.VK_ESCAPE, cl.KeyEvent.VK_ESCAPE);
//			dispatchKeyEvent(kev);
			this.dispatchKeyEvent(kev);
		}
	});
	lMouseListener.menu = this.menu;
    this.menu.addMouseListener(lMouseListener);
	
	var lKeyEventDispatcher = new JavaAdapter(clKeyEventDispatcher, {
    	dispatchKeyEvent : function(e) 
	    {
			if (this.isSelected()) 
			{
				if (e.getKeyCode() == clKeyEvent.VK_ENTER || e.getKeyCode() == clKeyEvent.VK_SPACE) 
				{
					var ae = new clActionEvent(this, e.getID(), this.getActionCommand(), e.getWhen(), e.getModifiers());
					var als = this.getActionListeners();
	                for (var i = 0; i < als.length; i++)
//                    getActionListeners()[i].actionPerformed(ae);
						als[i].actionPerformed(ae);
					var kev = new clKeyEvent(this, e.getID(), e.getWhen(), e.getModifiers(), clKeyEvent.VK_ESCAPE, clKeyEvent.VK_ESCAPE);
	                this.processKeyEvent(kev);
					return true;
				}
			}
			this.processKeyEvent(e);
			return false;
		}
	})
	clDefaultKeyboardFocusManager.getCurrentKeyboardFocusManager().addKeyEventDispatcher(lKeyEventDispatcher);
}

function computeSize(aMenu) 
{
	var lPictMenu = aMenu;
	var w = lPictMenu.DEFAULT_WIDTH;
	var h = lPictMenu.DEFAULT_HEIGHT;
	var separator = lPictMenu.BETWEEN_DROP;
	
	var strWidth = 0;
	var strHeight = 0;

	var pictWidth = 0;
	var pictHeight = 0;

	var title = lPictMenu.menu.getText();
	var icon = lPictMenu.menu.getIcon();

	if ((title == null || title.length == 0) && icon == null) 
		return new clDimension(w, h);
    else 
    {
		if (title == null || title.length == 0) 
			separator = 0;
		else 
		{
			var font = lPictMenu.menu.getFont();
			var fm = lPictMenu.menu.getFontMetrics(font);
			var strWidth = fm.stringWidth(title);
			var strHeight = fm.getHeight();
		}
        if (icon == null) 
			separator = 0;
		else 
		{
			var pictWidth = icon.getIconWidth();
			var pictHeight = icon.getIconHeight();
			var py = lPictMenu.TOP_DROP;
		}

		w = (pictWidth >= strWidth) ? (pictWidth + lPictMenu.PICT_DROP * 2) : (strWidth + lPictMenu.STR_DROP * 2);
		lPictMenu.px = (w - pictWidth) / 2;
		lPictMenu.sx = (w - strWidth) / 2;
	}
	h = lPictMenu.TOP_DROP + pictHeight + separator + strHeight + lPictMenu.BOTTOM_DROP;
    lPictMenu.sy = h - lPictMenu.BOTTOM_DROP;
    return new clDimension(w, h);
}   

// =======================================================================================================================
//import java.awt.Color;
//import java.awt.Component;
//import java.awt.DefaultKeyboardFocusManager;
//import java.awt.Dimension;
//import java.awt.Font;
//import java.awt.FontMetrics;
//import java.awt.Graphics;
//import java.awt.KeyEventDispatcher;
//import java.awt.event.ActionEvent;
//import java.awt.event.KeyEvent;
//import java.awt.event.MouseAdapter;
//import java.awt.event.MouseEvent;
//import javax.swing.Icon;

//import javax.swing.JMenu;

//public class PictMenu extends JMenu implements KeyEventDispatcher {
//    protected final int DEFAULT_WIDTH = 50;
//    protected final int DEFAULT_HEIGHT = 24;
//    protected final int TOP_DROP = 7;
//    protected final int PICT_DROP = 10;
//    protected final int BOTTOM_DROP = 7;
//    protected final int STR_DROP = 10;
//    protected final int BETWEEN_DROP = 0;
//    protected int px = 0;
//    protected int py = 0;
//    protected int sx = 0;
//    protected int sy = 0;

//    public PictMenu() {
//        super();
//        getPopupMenu().setPreferredSize(new Dimension(0, 0));
//    }

//    public void initMenu() {
//        Dimension dim = computeSize();
//        setPreferredSize(dim);
//        setMinimumSize(dim);
//        setSize(dim);
//        addMouseListener(new MouseAdapter() {

//            @Override
//            public void mouseClicked(MouseEvent e) {
//                //super.mouseClicked(e);
//                ActionEvent ae = new ActionEvent(e.getSource(),
//                                                 e.getID(),
//                                                 getActionCommand(),
//                                                 e.getWhen(),
//                                                 e.getModifiers());
//                java.awt.event.ActionListener[] als = getActionListeners();
//                for (int i = 0; i < als.length; i++)
//                    getActionListeners()[i].actionPerformed(ae);
//                KeyEvent kev = new KeyEvent((Component)e.getSource(), 401, 1, 0, KeyEvent.VK_ESCAPE, (char)KeyEvent.VK_ESCAPE);
//                dispatchKeyEvent(kev);
//            }

//        });
//        DefaultKeyboardFocusManager.getCurrentKeyboardFocusManager().addKeyEventDispatcher(this);
//    }

//    public boolean dispatchKeyEvent(KeyEvent e) {
//        if (isSelected()) {
//            if (e.getKeyCode() == KeyEvent.VK_ENTER || e.getKeyCode() == KeyEvent.VK_SPACE) {
//                ActionEvent ae = new ActionEvent(this,
//                                                 e.getID(),
//                                                 getActionCommand(),
//                                                 e.getWhen(),
//                                                 e.getModifiers());
//                java.awt.event.ActionListener[] als = getActionListeners();
//                for (int i = 0; i < als.length; i++)
//                    getActionListeners()[i].actionPerformed(ae);
//                KeyEvent kev = new KeyEvent((Component)this, e.getID(), e.getWhen(), e.getModifiers(), KeyEvent.VK_ESCAPE, (char)KeyEvent.VK_ESCAPE);
//                processKeyEvent(kev);
//                return true;
//            }
//        }
//        processKeyEvent(e);
//        return false;
//    }

//    protected Dimension computeSize() {
//        int w = DEFAULT_WIDTH;
//        int h = DEFAULT_HEIGHT;

//        int separator = BETWEEN_DROP;

//        int strWidth = 0;
//        int strHeight = 0;

//        int pictWidth = 0;
//        int pictHeight = 0;

//        String title = getText();
//        Icon icon = getIcon();

//        if ((title == null || title.length() == 0) && icon == null) {
//            return new Dimension(w, h);
//        } else {
//            if (title == null || title.length() == 0) {
//                separator = 0;
//            } else {
//                Font font = getFont();
//                FontMetrics fm = getFontMetrics(font);
//                strWidth = fm.stringWidth(title);
//                strHeight = fm.getHeight();
//            }

//            if (icon == null) {
//                separator = 0;
//            } else {
//                pictWidth = icon.getIconWidth();
//                pictHeight = icon.getIconHeight();
//                py = TOP_DROP;
//            }

//            w = (pictWidth >= strWidth) ? (pictWidth + PICT_DROP * 2) : (strWidth + STR_DROP * 2);
//            px = (w - pictWidth) / 2;
//            sx = (w - strWidth) / 2;
//        }
//        h = TOP_DROP + pictHeight + separator + strHeight + BOTTOM_DROP;
//        sy = h - BOTTOM_DROP;

//        return new Dimension(w, h);
//    }

//    @Override
//    public void paintComponent(Graphics g) {
//        String title = getText();
//        Icon icon = getIcon();

//        if (isSelected()) {
//            g.setColor(new Color(244, 244, 244));
//            g.fillRect(0, 0, getWidth(), getHeight());

//            g.setColor(Color.WHITE);
//            g.drawLine(0, 0, getWidth() - 1, 0);
//            g.drawLine(0, 1, getWidth() - 2, 1);
//            g.drawLine(0, 2, getWidth() - 3, 2);

//            g.drawLine(0, 0, 0, getHeight() - 1);
//            g.drawLine(1, 0, 1, getHeight() - 2);
//            g.drawLine(2, 0, 2, getHeight() - 3);

//            g.setColor(Color.BLACK);
//            g.drawLine(1, getHeight() - 1, getWidth() - 1, getHeight() - 1);
//            g.drawLine(getWidth() - 1, 1, getWidth() - 1, getHeight() - 1);

//            g.setColor(new Color(204, 204, 204));
//            g.drawLine(2, getHeight() - 2, getWidth() - 2, getHeight() - 2);
//            g.drawLine(getWidth() - 2, 2, getWidth() - 2, getHeight() - 2);

//            g.setColor(new Color(224, 224, 224));
//            g.drawLine(3, getHeight() - 3, getWidth() - 3, getHeight() - 3);
//            g.drawLine(getWidth() - 3, 3, getWidth() - 3, getHeight() - 3);

//            g.setColor(Color.BLACK);
//            if (icon != null) {
//                icon.paintIcon(this, g, px + 1, py + 1);
//            }
//            if (title != null && title.length() > 0) {
//                g.drawString(title, sx + 1, sy + 1);
//            }
//        } else {
//            if (icon != null) {
//                icon.paintIcon(this, g, px, py);
//            }
//            if (title != null && title.length() > 0) {
//                g.drawString(title, sx, sy);
//            }
//        }
//    }
//}