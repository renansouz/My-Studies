package nvsnmemoria;

import nvsnmemoria.JogoDaMemoria.*;
import java.awt.*;
import static java.awt.Component.CENTER_ALIGNMENT;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.*;
import static javax.swing.WindowConstants.EXIT_ON_CLOSE;

public class FrameEspanhois {
    
    BackgroundEspanhois BgEspanhois = new BackgroundEspanhois();
    ImageIcon ImgInvasao = new ImageIcon(getClass().getResource("/Imagens/btInvasão.png"));
    ImageIcon ImgConflitos = new ImageIcon(getClass().getResource("/Imagens/btConflitos.png"));
    ImageIcon ImgLiberdade = new ImageIcon(getClass().getResource("/Imagens/btLiberdade.png"));
    ImageIcon ImgVoltar = new ImageIcon(getClass().getResource("/Imagens/btVoltar.png"));
    JButton BtInvasao = new JButton(ImgInvasao);
    JButton BtConflitos = new JButton(ImgConflitos);
    JButton BtLiberdade = new JButton(ImgLiberdade);
    JPanel FrPanel = new  JPanel();
    int ScreenWidth;
    int ScreenHeight;
    GraphicsDevice gDevice;
    int pontos = 100;
    JButton voltar = new JButton(ImgVoltar);
    
    public void FrameEscolha(){
    JFrame FrEscolha = new JFrame();
    GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
    gDevice = Graficos.getDefaultScreenDevice();
    gDevice.setFullScreenWindow(FrEscolha);
    ScreenWidth = FrEscolha.getWidth();
    ScreenHeight = FrEscolha.getHeight();
    FrEscolha.setContentPane(BgEspanhois);
    FrEscolha.setSize(ScreenWidth, ScreenHeight);
    FrEscolha.setTitle("Tela de Bloqueio");
    FrEscolha.setLocationRelativeTo(null);
    FrEscolha.setDefaultCloseOperation(EXIT_ON_CLOSE);
    FrEscolha.setLayout(null);
    
    JPanel BtInvasaoPanel = new JPanel();
        int BDP_x = (int)Math.round(ScreenWidth*0.375);
        int BDP_y = (int)Math.round(ScreenHeight*0.1);
        int BDP_w = (int)Math.round(ScreenWidth*0.25);
        int BDP_h = (int)Math.round(ScreenHeight*0.225);
        BtInvasaoPanel.setBounds(BDP_x, BDP_y, BDP_w, BDP_h);
        BtInvasaoPanel.setAlignmentX(CENTER_ALIGNMENT);
        BtInvasaoPanel.add(BtInvasao);
        BtInvasaoPanel.setBackground(new Color(0,0,0,0));
        BtInvasaoPanel.setOpaque(false);
        BtInvasao.setFocusable(false);
        BtInvasao.setIcon(new ImageIcon(ImgInvasao.getImage().getScaledInstance(BtInvasaoPanel.getWidth(), BtInvasaoPanel.getHeight(), Image.SCALE_DEFAULT)));
        FrEscolha.add(BtInvasaoPanel);
        BtInvasao.setBackground(new Color(0,0,0,0));
        BtInvasao.setBorderPainted(false);
        BtInvasao.setOpaque(false);
        BtInvasao.setContentAreaFilled(false);
        BtInvasao.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameInvasao();
                FrEscolha.dispose();                                
            } 
        });
    
    JPanel BtConflitosPanel = new JPanel();
        int BCP_x = (int)Math.round(ScreenWidth*0.375);
        int BCP_y = (int)Math.round(ScreenHeight*0.35);
        int BCP_w = (int)Math.round(ScreenWidth*0.25);
        int BCP_h = (int)Math.round(ScreenHeight*0.225);
        BtConflitosPanel.setBounds(BCP_x, BCP_y, BCP_w, BCP_h);
        BtConflitosPanel.setAlignmentX(CENTER_ALIGNMENT);
        BtConflitosPanel.add(BtConflitos);
        BtConflitosPanel.setBackground(new Color(0,0,0,0));
        BtConflitosPanel.setOpaque(false);
        BtConflitos.setFocusable(false);
        BtConflitos.setIcon(new ImageIcon(ImgConflitos.getImage().getScaledInstance(BtConflitosPanel.getWidth(), BtConflitosPanel.getHeight(), Image.SCALE_DEFAULT)));
        FrEscolha.add(BtConflitosPanel);
        BtConflitos.setBackground(new Color(0,0,0,0));
        BtConflitos.setBorderPainted(false);
        BtConflitos.setOpaque(false);
        BtConflitos.setContentAreaFilled(false);
        BtConflitos.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameConflitos();
                FrEscolha.dispose();                             
            } 
        });
    
    JPanel BtLiberdadePanel = new JPanel();
        int BIP_x = (int)Math.round(ScreenWidth*0.375);
        int BIP_y = (int)Math.round(ScreenHeight*0.6);
        int BIP_w = (int)Math.round(ScreenWidth*0.25);
        int BIP_h = (int)Math.round(ScreenHeight*0.225);
        BtLiberdadePanel.setBounds(BIP_x, BIP_y, BIP_w, BIP_h);
        BtLiberdadePanel.setAlignmentX(CENTER_ALIGNMENT);
        BtLiberdadePanel.add(BtLiberdade);
        BtLiberdadePanel.setBackground(new Color(0,0,0,0));
        BtLiberdadePanel.setOpaque(false);
        BtLiberdade.setFocusable(false);
        BtLiberdade.setIcon(new ImageIcon(ImgLiberdade.getImage().getScaledInstance(BtLiberdadePanel.getWidth(), BtLiberdadePanel.getHeight(), Image.SCALE_DEFAULT)));
        FrEscolha.add(BtLiberdadePanel);
        BtLiberdade.setBackground(new Color(0,0,0,0));
        BtLiberdade.setBorderPainted(false);
        BtLiberdade.setOpaque(false);
        BtLiberdade.setContentAreaFilled(false);
        BtLiberdade.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameLiberdade();
                FrEscolha.dispose();                                
            } 
        });
                int BtV_X = (int)Math.round(ScreenWidth*0.01);
                int BtV_Y = (int)Math.round(ScreenHeight*0.01);
                int BtV_W = (int)Math.round(ScreenWidth*0.06);
                int BtV_H = (int)Math.round(ScreenHeight*0.1);
                voltar.setBounds(BtV_X, BtV_Y, BtV_W, BtV_H);
                voltar.setIcon(new ImageIcon(ImgVoltar.getImage().getScaledInstance(voltar.getWidth(), voltar.getHeight(), Image.SCALE_DEFAULT)));
                FrEscolha.add(voltar);
                voltar.addActionListener(
				new ActionListener(){
					@Override
					public void actionPerformed(ActionEvent e) {						
						FrameLevels  escolha = new FrameLevels();
                                                escolha.setVisible(true);
                                                FrEscolha.dispose();
					}				
				}
		);
    
    FrEscolha.setVisible(true);
    }
    public void FrameInvasao(){
        Tabuleiro FrInvasao = new Tabuleiro();
        FrInvasao.TabuleiroInvasao();
        
    }
    public void FrameConflitos(){
        Tabuleiro FrConflitos = new Tabuleiro();
        FrConflitos.TabuleiroConflitos();

    }
    public void FrameLiberdade(){
        Tabuleiro FrLiberdade = new Tabuleiro();
        FrLiberdade.TabuleiroLiberdade();
        
    }
    
    public class BackgroundEspanhois extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/Imagens/bgEspanhois.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
    
  }
    public class BackgroundIngleses extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/Imagens/bgCherokee.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
  }
    }
    
    class BackgroundPortugueses extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/Imagens/bgBrasil.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
  }
   

