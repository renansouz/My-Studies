package nvsnmemoria.JogoDaMemoria;

import java.awt.BorderLayout;
import java.awt.Graphics;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ImageIcon;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import static javax.swing.WindowConstants.EXIT_ON_CLOSE;


public class FrameJogo extends JFrame{
	private final Tabuleiro tabuleiro;//tabuleiro do jogo
        int ScreenWidth;
        int ScreenHeight;
        GraphicsDevice gDevice;
        BackgroundEspanhois BgEspanhois = new BackgroundEspanhois();

	
	public FrameJogo(){
		//configura a janela
                super("Jogo da Memoria");
                this.setContentPane(BgEspanhois);
                GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
                gDevice = Graficos.getDefaultScreenDevice();
                gDevice.setFullScreenWindow(this);
                ScreenWidth = this.getWidth();
                ScreenHeight = this.getHeight();
		setLayout(new BorderLayout());
		setSize(ScreenWidth, ScreenHeight);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		tabuleiro = new Tabuleiro();
		add(tabuleiro);
		
	setVisible(true);
        }
        class BackgroundEspanhois extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/Imagens/bgEspanhois.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
  }
}