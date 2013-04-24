/**
 * @name 131772161169977
*/
function main()
{
    var frame = new TestAction().frame;
    frame.setSize(300, 300);	
	frame.setLocationRelativeTo(null);
	frame.setDefaultCloseOperation(frame.EXIT_ON_CLOSE);
	frame.setVisible(true);
}

function TestAction()
{
	this.frame = new javax.swing.JFrame();
	this.actionButton = new javax.swing.JButton();
	this.mouseMenu = new javax.swing.JPopupMenu();

	var b1 = new javax.swing.JButton("1");
	var b2 = new javax.swing.JButton("2");
	var b3 = new javax.swing.JButton("3");
	var b4 = new javax.swing.JButton("4");
	var b5 = new javax.swing.JButton("5");
	var b6 = new javax.swing.JButton("6");
	var b7 = new javax.swing.JButton("7");
	var b8 = new javax.swing.JButton("8");
	var b9 = new javax.swing.JButton("9");
		
	this.textLabel = new javax.swing.JLabel("Text");
	this.textLabel.setFont(new Font("Arial", java.awt.Font.PLAIN+ java.awt.Font.BOLD, 100));
	this.textLabel.setHorizontalAlignment(javax.swing.JLabel.CENTER);
	this.frame.add(this.textLabel);
	
	this.imagePanel = new javax.swing.JPanel();	
	this.grid = new java.awt.GridLayout(3,3);
	this.imagePanel.setLayout(this.grid);
		
	this.imagePanel.add(b1);
	this.imagePanel.add(b2);
	this.imagePanel.add(b3);
	this.imagePanel.add(b4);
	this.imagePanel.add(b5);
	this.imagePanel.add(b6);
	this.imagePanel.add(b7);
	this.imagePanel.add(b8);
	this.imagePanel.add(b9);
	this.mouseMenu.add(this.imagePanel);
	
	var btns = this.imagePanel.getComponents();
	for (var i=0; i < btns.length; i++) 
	{  
		var c = btns[i];		
		if (c instanceof javax.swing.JButton) 
		{ 	
			c.setForeground(java.awt.Color.black); 		
			c.setBackground(java.awt.Color.white); 	  
			c.setFocusable(false);   
			var lMouseListener = new JavaAdapter(java.awt.event.MouseAdapter, java.awt.event.MouseListener, { 
				mouseEntered : function(e)
				{
				    this.c.setForeground(java.awt.Color.red); 
					this.c.setBackground(java.awt.Color.orange);
		    		var cursor = java.awt.Cursor.getPredefinedCursor(java.awt.Cursor.HAND_CURSOR);
		        	this.c.setCursor(cursor);
				},
				mouseExited : function(e)
				{
					this.c.setForeground(java.awt.Color.black); 
					this.c.setBackground(java.awt.Color.white);
				}
			});
			lMouseListener.c = c;
			c.addMouseListener(lMouseListener);
			var lActionListener = new JavaAdapter(java.awt.event.ActionListener, {
				actionPerformed : function(e)
				{
					this.textLabel.setText(this.c.getText());
					this.c.setForeground(java.awt.Color.black); 
					this.c.setBackground(java.awt.Color.white); 
					this.mouseMenu.setVisible(false);
				}		
			})
			lActionListener.c = c;
			lActionListener.textLabel = this.textLabel;
			lActionListener.mouseMenu = this.mouseMenu;
			c.addActionListener(lActionListener);
		}
	}

	var lThisMouseListener = new JavaAdapter(java.awt.event.MouseAdapter, java.awt.event.MouseMotionListener, {
		mouseClicked : function(e) 
		{
			if((e.getModifiers() & e.BUTTON3_MASK) != 0) 
			{
				var x = e.getX();
				var y = e.getY();
				this.mouseMenu.show(this.frame, x, y);	
			} 
			if((e.getModifiers() & e.BUTTON1_MASK) != 0) 
			{
				this.mouseMenu.setVisible(false);
			}
		}
	});
	lThisMouseListener.mouseMenu = this.mouseMenu;
	lThisMouseListener.frame = this.frame;
	this.frame.addMouseListener(lThisMouseListener);
}