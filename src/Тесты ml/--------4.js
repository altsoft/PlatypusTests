/**
 * @name 131772165459525
*/
//PictMenu.java
const clColor = java.awt.Color;
const clDimension = java.awt.Dimension;
const clFont = java.awt.Font;
const clFontMetrics = java.awt.FontMetrics;
const clGraphics = java.awt.Graphics;

const clImageIcon = javax.swing.ImageIcon;
const clJMenu = javax.swing.JMenu;

function PictMenu(aTitle, aPict)
{ 
	this.serialVersionUID = -1;
	
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
	
	this.icon = aPict;
	this.title = aTitle;	
	
	this.menu = new JavaAdapter(clJMenu, {
		paintComponent : function(g) 
		{
    		this.super$paintComponent(g);
			if (this.isSelected()) 
			{
				g.setColor(new clColor(244, 244, 244));
				g.fillRect(0, 0, this.getWidth(), this.getHeight());
			    		
				g.setColor(clColor.WHITE);
				g.drawLine(0, 0, this.getWidth() - 1, 0);
				g.drawLine(0, 1, this.getWidth() - 2, 1);
				g.drawLine(0, 2, this.getWidth() - 3, 2);
			    		
				g.drawLine(0, 0, 0, this.getHeight() - 1);
				g.drawLine(1, 0, 1, this.getHeight() - 2);
				g.drawLine(2, 0, 2, this.getHeight() - 3);
		    		
				g.setColor(clColor.BLACK);
				g.drawLine(1, this.getHeight() - 1, this.getWidth() - 1, this.getHeight() - 1);
				g.drawLine(this.getWidth() - 1,1, this.getWidth() - 1, this.getHeight() - 1);
		    		
				g.setColor(new clColor(204, 204, 204));
				g.drawLine(2, this.getHeight() - 2, this.getWidth() - 2, this.getHeight() - 2);
				g.drawLine(this.getWidth() - 2, 2, this.getWidth() - 2, this.getHeight() - 2);
		 		
				g.setColor(new clColor(224, 224, 224));
				g.drawLine(3, this.getHeight() - 3, this.getWidth() - 3, this.getHeight() - 3);
				g.drawLine(this.getWidth() - 3, 3, this.getWidth() - 3, this.getHeight() - 3);
			  		
				g.setColor(clColor.BLACK);
				if (this.icon != null) 
					g.drawImage(this.icon.getImage(), this.px + 1, this.py + 1, this);
				if (this.title != null && this.title.length > 0) 
					g.drawString(this.title, this.sx + 1, this.sy + 1);
			}else 
			{
				if (this.icon != null) 
					g.drawImage(this.icon.getImage(), this.px, this.py, this);
				if (this.title != null && this.title.length > 0) 
					g.drawString(this.title, this.sx, this.sy);
			}
		}
	});
	this.menu.icon = this.icon;
	this.menu.px = this.px;
	this.menu.py = this.py;
	this.menu.title = this.title
	this.menu.sx = this.sx
	this.menu.sy = this.sy;			


	this.computeSize = function() 
	{
		var w = this.DEFAULT_WIDTH;
		var h = this.DEFAULT_HEIGHT;
		
		var separator = this.BETWEEN_DROP;
		
		var strWidth = 0;
		var strHeight = 0;
		
		var pictWidth = 0;
		var pictHeight = 0;
		
		if ((this.title == null || this.title.length == 0 ) && this.icon == null) 
			return new clDimension(w, h);
		else 
		{
			if (this.title == null || this.title.length == 0) 
				separator = 0;
			else 
			{
				var font = this.menu.getFont();
				var fm = this.menu.getFontMetrics(font);
				strWidth = fm.stringWidth(this.title);
				strHeight = fm.getHeight(); 
			}
			
			if (this.icon == null) 
				separator = 0;
			else 
			{
				pictWidth = this.icon.getIconWidth();
				pictHeight = this.icon.getIconHeight();
				this.py = this.TOP_DROP;
			}
			
			w = (pictWidth >= strWidth) ? (pictWidth  + this.PICT_DROP * 2)  : (strWidth  + this.STR_DROP * 2);
			this.px = (w - pictWidth) / 2;
			this.sx = (w - strWidth) / 2;
		}
		h = this.TOP_DROP + pictHeight + separator + strHeight + this.BOTTOM_DROP;
		this.sy = h - this.BOTTOM_DROP;

		return new clDimension(w, h);
	};
	
	var dim = this.computeSize();
	this.menu.setPreferredSize(dim);
	this.menu.setMinimumSize(dim);
	this.menu.setSize(dim);
}
//
// SimplePictMenu.java.
//package com.victa.menu;

//import java.awt.Component;
//import java.awt.DefaultKeyboardFocusManager;
//import java.awt.Dimension;
//import java.awt.KeyEventDispatcher;
//import java.awt.event.KeyEvent;
//import java.awt.event.MouseAdapter;
//import java.awt.event.MouseEvent;

//import javax.swing.ImageIcon;

//public class SimplePictMenu extends PictMenu implements KeyEventDispatcher {
//	static final long serialVersionUID = -1;
//	
//	public SimplePictMenu(String title, ImageIcon pict) {
//		super(title, pict);
//		
//		getPopupMenu().setPreferredSize(new Dimension(0, 0));
//		
//		DefaultKeyboardFocusManager.getCurrentKeyboardFocusManager().addKeyEventDispatcher(this);
//		
//		addMouseListener(new MouseAdapter() {
//			public void mouseReleased(MouseEvent me) {
//				sendCancelKeyEvent();
//			}
//			
//			public void mouseClicked(MouseEvent me) {
//				sendCancelKeyEvent();
//				doAction();
//			}
//		});

//	}
//	
//	private void sendCancelKeyEvent() {
//		KeyEvent kee = new KeyEvent((Component)this, 401, 0l,
//				0, 27, (char)27);
//		dispatchKeyEvent(kee);
//	}
//	
//	public boolean dispatchKeyEvent(KeyEvent e) {
//		KeyEvent kee = new KeyEvent((Component)this, e.getID(), e.getWhen(),
//				e.getModifiers(), e.getKeyCode(),e.getKeyChar());

//		if (isSelected()) {
//			if (e.getKeyCode() == KeyEvent.VK_ENTER || e.getKeyCode() == KeyEvent.VK_SPACE) {
//				kee = new KeyEvent((Component)this, e.getID(), e.getWhen(),
//						e.getModifiers(), 27, (char)27);
//				
//				doAction();
//			}
//		}
//		processKeyEvent(kee); 
//		
//		return true; 
//	} 

//	public void doAction() {
//	}
//	
//}

//

