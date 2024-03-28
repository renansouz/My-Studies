package nvsnmemoria;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class FrameIndex extends JFrame{
 
    BackgroundIndex BgIndex = new BackgroundIndex();
    ImageIcon logo = new ImageIcon(getClass().getResource("/Imagens/logoNew.png"));
    ImageIcon jogar = new ImageIcon(getClass().getResource("/Imagens/jogar.png"));
    JLabel lbLogo = new JLabel(logo);
    JButton btJogar = new JButton(jogar);
    JButton btTeste = new JButton("Teste");
    GraphicsDevice gDevice;
    int ScreenWidth;
    int ScreenHeight;

    public FrameIndex() {
    JMenu pagInicial = new JMenu("Pág Inicial");
    JMenu pagDificuldade = new JMenu("Jogar");
    JMenuItem itemDificuldade = new JMenuItem("DIficuldades");
    JMenu pagEstatisticas = new JMenu("Estatísticas");
    JMenu pagCriadores = new JMenu("Criadores");
    JMenu fechar = new JMenu("Fechar");          
    JMenuBar barra = new JMenuBar();
    
    setJMenuBar(barra);
    barra.add(pagInicial);
    barra.add(pagDificuldade);
    barra.add(pagEstatisticas);
    barra.add(pagCriadores);
    barra.add(fechar);
    pagDificuldade.add(itemDificuldade);

    }
       
    public void TelaBloqueio(){
        
        GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
        gDevice = Graficos.getDefaultScreenDevice();
        gDevice.setFullScreenWindow(this);
        ScreenWidth = this.getWidth();
        ScreenHeight = this.getHeight();
        this.setContentPane(BgIndex);
        setSize(ScreenWidth, ScreenHeight);
        setTitle("Tela de Bloqueio");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);
        
        JPanel LogoPanel = new JPanel();
        int LP_x = (int)Math.round(ScreenWidth*0.3);
        int LP_y = (int)Math.round(ScreenHeight*0.1);
        int LP_w = (int)Math.round(ScreenWidth*0.4);
        int LP_h = (int)Math.round(ScreenHeight*0.45);
        LogoPanel.setBounds(LP_x, LP_y, LP_w, LP_h);
        LogoPanel.setAlignmentX(CENTER_ALIGNMENT);
        lbLogo.setIcon(new ImageIcon(logo.getImage().getScaledInstance(LogoPanel.getWidth(), LogoPanel.getHeight(), Image.SCALE_DEFAULT)));;
        LogoPanel.add(lbLogo);
        LogoPanel.setBackground(new Color(0,0,0,0));
        LogoPanel.setOpaque(false);
        LogoPanel.setFocusable(false);
        add(LogoPanel);
        
        JPanel BtJogarPanel = new JPanel();
        int BJP_x = (int)Math.round(ScreenWidth*0.375);
        int BJP_y = (int)Math.round(ScreenHeight*0.6);
        int BJP_w = (int)Math.round(ScreenWidth*0.25);
        int BJP_h = (int)Math.round(ScreenHeight*0.225);
        BtJogarPanel.setBounds(BJP_x, BJP_y, BJP_w, BJP_h);
        BtJogarPanel.setAlignmentX(CENTER_ALIGNMENT);
        btJogar.setIcon(new ImageIcon(jogar.getImage().getScaledInstance(BtJogarPanel.getWidth(), BtJogarPanel.getHeight(), Image.SCALE_DEFAULT)));;
        BtJogarPanel.add(btJogar);
        BtJogarPanel.setBackground(new Color(0,0,0,0));
        BtJogarPanel.setOpaque(false);
        BtJogarPanel.setFocusable(false);
        btJogar.setBackground(new Color(0,0,0,0));
        btJogar.setBorderPainted(false);
        btJogar.setOpaque(false);
        btJogar.setContentAreaFilled(false);
        btJogar.setFocusable(false);
        add(BtJogarPanel);
        btJogar.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {
                                
                FrameLevels escolha = new FrameLevels();                
                escolha.setVisible(true);
                dispose();                                
            } 
        });
        
        
        
        
        setVisible(true);
        
    }
    
    class BackgroundIndex extends JPanel {
    
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