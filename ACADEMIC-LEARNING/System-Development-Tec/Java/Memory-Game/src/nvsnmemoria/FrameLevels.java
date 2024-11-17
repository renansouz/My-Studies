package nvsnmemoria;


import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class FrameLevels extends FrameIndex{
    
    GridBagConstraints LvLayout;
    BackgroundLevels BgLevels = new BackgroundLevels();
    ImageIcon ImgIngleses = new ImageIcon(getClass().getResource("/Imagens/btIngleses.png"));
    ImageIcon ImgEspanhois = new ImageIcon(getClass().getResource("/Imagens/btEspanhois.png"));
    ImageIcon ImgPortugueses = new ImageIcon(getClass().getResource("/Imagens/btPortugueses.png"));
    ImageIcon ImgVoltar = new ImageIcon(getClass().getResource("/Imagens/btVoltar.png"));
    JButton BtEspanhois = new JButton(ImgEspanhois);
    JButton BtPortugueses = new JButton(ImgPortugueses);
    JButton BtIngleses = new JButton(ImgIngleses);
    JPanel FrPanel = new  JPanel();
    JButton voltar = new JButton(ImgVoltar);
    
    public FrameLevels(){
    GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
    gDevice = Graficos.getDefaultScreenDevice();
    gDevice.setFullScreenWindow(this);
    ScreenWidth = this.getWidth();
    ScreenHeight = this.getHeight();
    this.setContentPane(BgLevels);
    setSize(ScreenWidth, ScreenHeight);
    setTitle("Tela de Bloqueio");
    setLocationRelativeTo(null);
    setDefaultCloseOperation(EXIT_ON_CLOSE);
    setLayout(null);
    
    JPanel BtEspanhoisPanel = new JPanel();
        int BEP_x = (int)Math.round(ScreenWidth*0.15);
        int BEP_y = (int)Math.round(ScreenHeight*0.2);
        int BEP_w = (int)Math.round(ScreenWidth*0.2);
        int BEP_h = (int)Math.round(ScreenHeight*0.6);
        BtEspanhoisPanel.setBounds(BEP_x, BEP_y, BEP_w, BEP_h);
        BtEspanhoisPanel.setAlignmentX(CENTER_ALIGNMENT);
        BtEspanhoisPanel.add(BtEspanhois);
        BtEspanhoisPanel.setBackground(new Color(0,0,0,0));
        BtEspanhoisPanel.setOpaque(false);
        BtEspanhois.setFocusable(false);
        BtEspanhois.setIcon(new ImageIcon(ImgEspanhois.getImage().getScaledInstance(BtEspanhoisPanel.getWidth(), BtEspanhoisPanel.getHeight(), Image.SCALE_DEFAULT)));;
        add(BtEspanhoisPanel);
        BtEspanhois.setBackground(new Color(0,0,0,0));
        BtEspanhois.setBorderPainted(false);
        BtEspanhois.setOpaque(false);
        BtEspanhois.setContentAreaFilled(false);
        BtEspanhois.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameEspanhois partidas = new FrameEspanhois();                
                partidas.FrameEscolha();
                dispose();                                
            } 
        });
    
    JPanel BtPortuguesesPanel = new JPanel();
        int BPP_x = (int)Math.round(ScreenWidth*0.4);
        int BPP_y = (int)Math.round(ScreenHeight*0.2);
        int BPP_w = (int)Math.round(ScreenWidth*0.2);
        int BPP_h = (int)Math.round(ScreenHeight*0.6);
        BtPortuguesesPanel.setBounds(BPP_x, BPP_y, BPP_w, BPP_h);
        BtPortuguesesPanel.setAlignmentX(CENTER_ALIGNMENT);
        BtPortuguesesPanel.add(BtPortugueses);
        BtPortuguesesPanel.setBackground(new Color(0,0,0,0));
        BtPortuguesesPanel.setOpaque(false);
        BtPortugueses.setFocusable(false);
        BtPortugueses.setIcon(new ImageIcon(ImgPortugueses.getImage().getScaledInstance(BtPortuguesesPanel.getWidth(), BtPortuguesesPanel.getHeight(), Image.SCALE_DEFAULT)));;
        add(BtPortuguesesPanel);
        BtPortugueses.setBackground(new Color(0,0,0,0));
        BtPortugueses.setBorderPainted(false);
        BtPortugueses.setOpaque(false);
        BtPortugueses.setContentAreaFilled(false);
        BtPortugueses.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FramePortugueses partidas = new FramePortugueses();                
                partidas.Portugueses();
                dispose();                             
            } 
        });
    
    JPanel BtInglesesPanel = new JPanel();
        int BIP_x = (int)Math.round(ScreenWidth*0.65);
        int BIP_y = (int)Math.round(ScreenHeight*0.2);
        int BIP_w = (int)Math.round(ScreenWidth*0.2);
        int BIP_h = (int)Math.round(ScreenHeight*0.6);
        BtInglesesPanel.setBounds(BIP_x, BIP_y, BIP_w, BIP_h);
        BtInglesesPanel.setAlignmentX(CENTER_ALIGNMENT);
        BtInglesesPanel.add(BtIngleses);
        BtInglesesPanel.setBackground(new Color(0,0,0,0));
        BtInglesesPanel.setOpaque(false);
        BtIngleses.setFocusable(false);
        BtIngleses.setIcon(new ImageIcon(ImgIngleses.getImage().getScaledInstance(BtInglesesPanel.getWidth(), BtInglesesPanel.getHeight(), Image.SCALE_DEFAULT)));;
        add(BtInglesesPanel);
        BtIngleses.setBackground(new Color(0,0,0,0));
        BtIngleses.setBorderPainted(false);
        BtIngleses.setOpaque(false);
        BtIngleses.setContentAreaFilled(false);
        BtIngleses.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameIngleses partidas = new FrameIngleses();                
                partidas.Ingleses();
                dispose();                                
            } 
        });
                int BtV_X = (int)Math.round(ScreenWidth*0.01);
                int BtV_Y = (int)Math.round(ScreenHeight*0.01);
                int BtV_W = (int)Math.round(ScreenWidth*0.06);
                int BtV_H = (int)Math.round(ScreenHeight*0.1);
                voltar.setBounds(BtV_X, BtV_Y, BtV_W, BtV_H);
                voltar.setIcon(new ImageIcon(ImgVoltar.getImage().getScaledInstance(voltar.getWidth(), voltar.getHeight(), Image.SCALE_DEFAULT)));
                add(voltar);
                voltar.addActionListener(
				new ActionListener(){
					@Override
					public void actionPerformed(ActionEvent e) {						
						FrameIndex  index = new FrameIndex();
                                                index.TelaBloqueio();
                                                dispose();
					}				
				}
		);
    setVisible(true);
    }

    
    class BackgroundLevels extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/Imagens/bgdbloqueio.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
  }
}
