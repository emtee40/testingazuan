package it.eng.qbe.security;

import java.awt.Dimension;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.security.MessageDigest;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.KeyStroke;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.UIManager.LookAndFeelInfo;
import javax.swing.border.Border;
import javax.swing.border.CompoundBorder;
import javax.swing.border.EtchedBorder;

import sun.misc.BASE64Encoder;



public class PasswordGenerator extends JDialog implements ActionListener, KeyListener {

	private JPanel mainPane = null;	
	private JButton generatePwdBtn = null;
	private JButton abortButton = null;
	private JButton clearBtn = null;
	private JTextField clearPwdTextField = null;
	private JLabel clearPwdLabel = null;
	private JTextField encPwdTextField = null;
	private JLabel encPwdLabel = null;
	private Dimension buttonDimension = new Dimension(100,40);
	
	/**
	 * Start point
	 * @param args Eventual execution arguments
	 */
	public static void main (String[] args) {
		setLookAndFeel();
		PasswordGenerator pg = new PasswordGenerator();
	}
	
	
	/**
	 * Constructor
	 */
	public PasswordGenerator() {
		createAndShowGUI();
	}
	
	/**
	 * Initializes and shows the Graphical Interface
	 */
	private void createAndShowGUI(){
		setSize(640, 210);
		setResizable(false);
		setContentPane(getMainPane());
		setTitle("SpagoBIQbeEngine - Password Generator");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
	}
	
	/**
	 * Set the look and feel of the Graphical Inteface
	 */
	static private void setLookAndFeel(){
    	LookAndFeelInfo[] lafi = UIManager.getInstalledLookAndFeels();
       	try {
			UIManager.setLookAndFeel(lafi[0].getClassName());
			JFrame.setDefaultLookAndFeelDecorated(true);
			JDialog.setDefaultLookAndFeelDecorated(true);
		} catch (ClassNotFoundException e) {
			System.out.println("SpagoBIQbeEngine Password Generator - " + e.toString());
		} catch (InstantiationException e) {
			System.out.println("SpagoBIQbeEngine Password Generator - " + e.toString());
		} catch (IllegalAccessException e) {
			System.out.println("SpagoBIQbeEngine Password Generator - " + e.toString());
		} catch (UnsupportedLookAndFeelException e) {
			System.out.println("SpagoBIQbeEngine Password Generator - " + e.toString());
		}
    }
    
	
	/**
	 * Creates the text field for the clear password
	 * @return JTextField, the text field for the clear password
	 */
	private JTextField getClearPwdTextField(){
		if ( clearPwdTextField == null) {
			clearPwdTextField = new JTextField();
			clearPwdTextField.setLocation(new java.awt.Point(210,30));
			clearPwdTextField.setSize(new java.awt.Dimension(350,30));
			Border outer = BorderFactory.createEtchedBorder(EtchedBorder.LOWERED);
			Border inner = BorderFactory.createEmptyBorder(5,5,5,5);
			clearPwdTextField.setBorder(new CompoundBorder(outer, inner));
		}
		return clearPwdTextField;
	}
	
	
	
	/**
	 * Creates the text filed for the encrypt password
	 * @return JTextField, the text filed for the encrypt password
	 */
	private JTextField getEncPwdTextField(){
		if ( encPwdTextField == null) {
			encPwdTextField = new JTextField();
			encPwdTextField.setEditable(false);
			encPwdTextField.setLocation(new java.awt.Point(210,70));
			encPwdTextField.setSize(new java.awt.Dimension(350,30));
			Border outer = BorderFactory.createEtchedBorder(EtchedBorder.LOWERED);
			Border inner = BorderFactory.createEmptyBorder(5,5,5,5);
			encPwdTextField.setBorder(new CompoundBorder(outer, inner));
		}
		return encPwdTextField;
	}

	
	
	/**
	 * Creates the label for the clear password
	 * @return JLabel, the label for the clear password
	 */
	private JLabel getClearPwdLabel() {
		if (clearPwdLabel == null) {
			clearPwdLabel = new JLabel("Password",JLabel.CENTER);
			clearPwdLabel.setLocation(new java.awt.Point(20, 30));
			clearPwdLabel.setSize(new java.awt.Dimension(170, 30));
			clearPwdLabel.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.LOWERED));
		}
		return clearPwdLabel;
	}

	
	/**
	 * Creates the label for the path parent field
	 * @return JLabel, the label for the path parent field
	 */
	private JLabel getEncPwdLabel() {
		if (encPwdLabel == null) {
			encPwdLabel = new JLabel("Password Encrypted",JLabel.CENTER);
			encPwdLabel.setLocation(new java.awt.Point(20, 70));
			encPwdLabel.setSize(new java.awt.Dimension(170, 30));
			encPwdLabel.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.LOWERED));
		}
		return encPwdLabel;
	}

	
	
	/**
	 * Creates the button for the generation of the encrypted password 
	 * @return JButton, the button for the generation of the encrypted password 
	 */
	private JButton getGeneratePwdButton() {
		if (generatePwdBtn == null) {
			generatePwdBtn = new JButton();
			generatePwdBtn.setText("Generate");
			generatePwdBtn.setActionCommand("GeneratePwd");
			generatePwdBtn.addKeyListener(this);
			generatePwdBtn.addActionListener(this);
			generatePwdBtn.setLocation(new Point(100,130));
			generatePwdBtn.setSize(buttonDimension);
			generatePwdBtn.setBorder(BorderFactory.createRaisedBevelBorder());
			generatePwdBtn.registerKeyboardAction(this,"GeneratePwd",KeyStroke.getKeyStroke(KeyEvent.VK_ENTER,0),JButton.WHEN_FOCUSED);
		}
		return generatePwdBtn;
	}

	
	/**
	 * Creates the button for the clear fields task
	 * @return JButton, the button that clears the fields
	 */
	private JButton getClearButton() {
		if (clearBtn == null) {
			clearBtn = new JButton();
			clearBtn.setText("Clear");
			clearBtn.setActionCommand("Clear");
			clearBtn.addKeyListener(this);
			clearBtn.addActionListener(this);
			clearBtn.setLocation(new Point(250,130));
			clearBtn.setSize(buttonDimension);
			clearBtn.setBorder(BorderFactory.createRaisedBevelBorder());
			clearBtn.registerKeyboardAction(this,"Clear",KeyStroke.getKeyStroke(KeyEvent.VK_ENTER,0),JButton.WHEN_FOCUSED);
		}
		return clearBtn;
	}

	
	
	/**
	 * Creates the button for abort operation
	 * @return JButton, the button for abort operation 
	 */
	private JButton getAbortButton() {
		if (abortButton == null) {
			abortButton = new JButton();
			abortButton.setText("Abort");
			abortButton.setActionCommand("Abort");
			abortButton.addKeyListener(this);
			abortButton.addActionListener(this);
			abortButton.setLocation(new Point(400,130));
			abortButton.setSize(buttonDimension);
			abortButton.setBorder(BorderFactory.createRaisedBevelBorder());
			abortButton.registerKeyboardAction(this,"Abort",KeyStroke.getKeyStroke(KeyEvent.VK_ENTER,0),JButton.WHEN_FOCUSED);
			abortButton.registerKeyboardAction(this,"Abort",KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE,0),JButton.WHEN_IN_FOCUSED_WINDOW);
		}
		return abortButton;
	}

	
	


	
	/**
	 * Creates the main Panel of the Interface
	 * @return JPanel, the main Panel of the Interface
	 */
	private JPanel getMainPane() {
		if (mainPane == null) {
			mainPane = new JPanel();
			mainPane.setLayout(null);
			mainPane.add(getClearPwdLabel(), null);
			mainPane.add(getClearPwdTextField(), null);
			mainPane.add(getEncPwdLabel(), null);
			mainPane.add(getAbortButton(), null);
			mainPane.add(getEncPwdTextField(), null);
			mainPane.add(getGeneratePwdButton(), null);
			mainPane.add(getClearButton(), null);
		}
		return mainPane;
	}
	
	
	/**
	 * Manages the action performed by interface components
	 */
	public void actionPerformed(ActionEvent e) {	
		if (e.getActionCommand().equals("Abort")) {
			System.exit(0);
		} else if (e.getActionCommand().equals("GeneratePwd")) {
			generateKey();				
		} else if (e.getActionCommand().equals("Clear")) {
			encPwdTextField.setText("");
			clearPwdTextField.setText("");
		}
	}
	

	/**
	 * Generate the encrypted password
	 * @return boolean, operation executed or not
	 */
	private void generateKey(){
	    try{
	    	encPwdTextField.setText("");
	    	String clearPwd = clearPwdTextField.getText();
	    	if((clearPwd==null) || clearPwd.trim().equals("")){
	    		return;
	    	} else {
	    		MessageDigest algorithm = null;
	            algorithm = MessageDigest.getInstance("SHA-1");
	            byte[] passwordToVerifyByteArray = new byte[clearPwd.length()];
	            passwordToVerifyByteArray = clearPwd.getBytes("UTF-8");
	            algorithm.reset();
	            algorithm.update(passwordToVerifyByteArray);
	            byte[] digestPasswordToCript = algorithm.digest();
	            String encPwd = new BASE64Encoder().encodeBuffer(digestPasswordToCript); 
	            encPwdTextField.setText(encPwd.trim());
	    	}
		} catch (Exception e){
			System.out.println(e);
			return;
		}
	}


	public void keyPressed(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}


	public void keyReleased(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}


	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		
	}
	
}
