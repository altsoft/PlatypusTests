/**
 * @name 131772163982696
*/
//import java.awt.Color;
//importPackage(java.awt.Cursor);
//importPackage(java.awt.Font);
//importPackage(java.awt.Graphics);
//importPackage(java.awt.event.ActionEvent);
//importPackage(java.awt.event.ActionListener);
//importPackage(java.awt.event.MouseAdapter);
//importPackage(java.awt.event.MouseEvent);
//importPackage(java.beans.PropertyChangeEvent);
//importPackage(java.beans.PropertyChangeListener);
//importPackage(java.util.HashSet);
//importPackage(java.util.Set);
//importPackage(javax.swing.Action);
//importPackage(javax.swing.Icon);
//importPackage(javax.swing.JLabel);

function LinkLabel()
{
//	Set<ActionListener> listeners = new HashSet<ActionListener>();	
	var listeners;
	this.label = new javax.swing.JLabel();
	this.highlited = false;
	this.selected = false;
	this.highlightBackground = false;
	this.action = null;
	var lActionPropertyChangeListener = new JavaAdapter(java.beans.PropertyChangeListener, { 
		propertyChange : function (evt) {
			if (evt != null && "enabled".equals(evt.getPropertyName()) == true) 
			{
				var newValue = evt.getNewValue();
				if (newValue != isEnabled()) {
					setEnabled(newValue);
				}
			}
		}
	});
	this.label.setForeground(new java.awt.Color(0x0000CC));
	this.label.setBackground(new java.awt.Color(0xC3D9FF));
	this.label.setCursor(java.awt.Cursor.getPredefinedCursor(java.awt.Cursor.HAND_CURSOR));
	var lMouseListener = new JavaAdapter(java.awt.event.MouseAdapter, java.awt.event.MouseListener, {
		mousePressed : function(e)
		{
			var event = new java.awt.event.ActionEvent(this, 0, "clicked");
//			for (ActionListener lst : listeners) {
//				lst.actionPerformed(event);
//			}
			if (action != null) {
				action.actionPerformed(event);
			}
		},
		mouseEntered : function(e) 
		{
			highlited = true;
			repaint();
		},
		mouseExited : function(e) 
		{
			highlited = false;
			repaint();
		}
	});
	lMouseListener.action = this.action;
	lMouseListener.highlited = this.highlited;
	this.label.addMouseListener(lMouseListener);
	this.isSelected = function()
	{
		return this.selected;
	};
	this.setSelected = function(lSelected) 
	{
		var lOldSelected = this.selected;
		this.selected = lSelected;
		if (lOldSelected != lSelected) {
			this.label.repaint();
		}
	};
	this.isHighlightBackground = function() 
	{
		return this.highlightBackground;
	};
	this.setHighlightBackground = function(lHighlightBAckground) 
	{
		this.highlightBackground = lHighlightBAckground;
	};
	this.getAction = function() 
	{
		return this.action;
	};
	this.setAction = function (lAction) 
	{
		if (this.action != null) 
		{
			this.action.removePropertyChangeListener(this.lActionPropertyChangeListener);
		}
		this.action = lAction;
		this.action.addPropertyChangeListener(lActionPropertyChangeListener);
		this.label.setText(this.action.getValue(javax.swing.Action.NAME));
		this.label.setIcon(this.action.getValue(javax.swing.Action.SMALL_ICON));
		this.label.setToolTipText(this.action.getValue(javax.swing.Action.SHORT_DESCRIPTION));
	};
	this.addActionListener = function(lst) 
	{
		this.listeners.add(lst);
	};
	this.removeActionListener = function(lst) 
	{
		this.listeners.remove(lst);
	};
	this.label.paint = function(g) 
	{
		var width = this.label.getWidth();
		var height = this.label.getHeight();
		if (this.highlightBackground == true) {
			if ((this.highlited && this.isEnabled()) || this.selected) 
			{
				var lSelectedBackground = this.label.getBackground();
				if (this.highlited && !this.selected) 
				{
					var addToColor = 15;
					lSelectedBackground = new Color(
						Math.min(255, lSelectedBackground.getRed() + addToColor),
						Math.min(255, lSelectedBackground.getGreen() + addToColor),
						Math.min(255, lSelectedBackground.getBlue() + addToColor));
				}
				g.setColor(lSelectedBackground);
				g.fillRect(0, 0, width, height);
			}
		}
		this.label.paint(g);
		if (this.highlited && this.isEnabled()) 
		{
			var baseline = this.label.getBaseline(width, height) + 1;
			g.setColor(this.label.getForeground());
			g.drawLine(0, baseline, width, baseline);
		}
	}
}


//=========================================================================================================
//public class LinkLabel extends JLabel {
//	Set<ActionListener> listeners = new HashSet<ActionListener>();
//	boolean highlited = false;
//	boolean selected = false;
//	boolean highlightBackground = false;
//	Action action = null;
//	PropertyChangeListener actionPropertyChangeListener = new PropertyChangeListener() {
//		public void propertyChange(PropertyChangeEvent evt) {
//			if (evt != null && "enabled".equals(evt.getPropertyName()) == true) {
//				Boolean newValue = (Boolean) evt.getNewValue();
//				if (newValue != isEnabled()) {
//					setEnabled(newValue);
//				}
//			}
//		}
//	};
//	
//	public LinkLabel() {
//		super();
//		setForeground(new Color(0x0000CC));
//		setBackground(new Color(0xC3D9FF));
//		setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
//		addMouseListener(new MouseAdapter() {
//			@Override
//			public void mousePressed(MouseEvent e) {
//				ActionEvent event = new ActionEvent(this, 0, "clicked");
//				for (ActionListener lst : listeners) {
//					lst.actionPerformed(event);
//				}
//				if (action != null) {
//					action.actionPerformed(event);
//				}
//			}
//			@Override
//			public void mouseEntered(MouseEvent e) {
//				highlited = true;
//				repaint();
//			}
//			@Override
//			public void mouseExited(MouseEvent e) {
//				highlited = false;
//				repaint();
//			}
//		});
//	}
//	
//	public boolean isSelected() {
//		return selected;
//	}
//	
//	public void setSelected(boolean selected) {
//		boolean oldSelected = this.selected;
//		this.selected = selected;
//		if (oldSelected != selected) {
//			repaint();
//		}
//	}
//	
//	public boolean isHighlightBackground() {
//		return highlightBackground;
//	}
//	
//	public void setHighlightBackground(boolean highlightBAckground) {
//		this.highlightBackground = highlightBAckground;
//	}
//	
//	public Action getAction() {
//		return action;
//	}
//	
//	public void setAction(Action _action) {
//		if (this.action != null) {
//			this.action.removePropertyChangeListener(actionPropertyChangeListener);
//		}
//		this.action = _action;
//		action.addPropertyChangeListener(actionPropertyChangeListener);
//		setText((String) action.getValue(Action.NAME));
//		setIcon((Icon) action.getValue(Action.SMALL_ICON));
//		setToolTipText((String) action.getValue(Action.SHORT_DESCRIPTION));
//	}
//	
//	public void addActionListener(ActionListener lst) {
//		listeners.add(lst);
//	}
//	
//	public void removeActionListener(ActionListener lst) {
//		listeners.remove(lst);
//	}
//	
//	@Override
//	public void paint(Graphics g) {
//		int width = getWidth();
//		int height = getHeight();
//		if (highlightBackground == true) {
//			if ((highlited && isEnabled()) || selected) {
//				Color selectedBackground = getBackground();
//				if (highlited && !selected) {
//					int addToColor = 15;
//					selectedBackground = new Color(
//						Math.min(255, selectedBackground.getRed() + addToColor),
//						Math.min(255, selectedBackground.getGreen() + addToColor),
//						Math.min(255, selectedBackground.getBlue() + addToColor));
//				}
//				g.setColor(selectedBackground);
//				g.fillRect(0, 0, width, height);
//			}
//		}
//		super.paint(g);
//		if (highlited && isEnabled()) {
//			int baseline = getBaseline(width, height) + 1;
//			g.setColor(getForeground());
//			g.drawLine(0, baseline, width, baseline);
//		}
//	}
//}