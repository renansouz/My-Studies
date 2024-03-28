package nvsnmemoria.JogoDaMemoria;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import nvsnmemoria.FrameEspanhois;

public class Tabuleiro extends JFrame {

    private Carta[] cartas;
    private Carta ultimaCartaVirada;	
    private int erros;
    private int paresFormados;	
    private boolean lock;
    int ScreenWidth;
    int ScreenHeight;
    GraphicsDevice gDevice;
    BackgroundEspanhois BgEspanhois = new BackgroundEspanhois();
    JPanel Tabuleiros = new JPanel();
    ImageIcon ImgReset = new ImageIcon(getClass().getResource("/Imagens/btReset.png"));
    ImageIcon ImgVoltar = new ImageIcon(getClass().getResource("/Imagens/btVoltar.png"));
    JButton reiniciar = new JButton(ImgReset);
    JButton voltar = new JButton(ImgVoltar);
	
	public void TabuleiroInvasao(){
		setTitle("Jogo da Memória");
                GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
                gDevice = Graficos.getDefaultScreenDevice();
                gDevice.setFullScreenWindow(this);
                ScreenWidth = this.getWidth();
                ScreenHeight = this.getHeight();
                setContentPane(BgEspanhois);
                setDefaultCloseOperation(EXIT_ON_CLOSE);
		cartas = new Carta[8];
                cartas[0] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);
		cartas[1] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);		
		cartas[2] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);
		cartas[3] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);		
		cartas[4] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);
		cartas[5] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);		
		cartas[6] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);
		cartas[7] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);		

		Embaralhador.Embaralhar(cartas);
		ultimaCartaVirada = null;
		erros = 0;
		paresFormados = 0;
		lock = false;
		//Tabuleiros.setBackground(new Color(0,0,0,0));
		setLayout(null);
                //Tabuleiros.setLayout(null);
                int cont = 0;
                int carta_X = (int)Math.round(ScreenWidth*0.125);
                int carta_Y = (int)Math.round(ScreenHeight*0.275);
                int carta_W = (int)Math.round(ScreenWidth*0.1);
                int carta_H = (int)Math.round(ScreenHeight*0.3);
		for (int i = 0; i < 4; i ++){
                    for (int j = 0; j < 2; j ++){
                        cartas[cont].setBounds((carta_X * i) + 150, (carta_Y * j) + 200, carta_W, carta_H);
			add(cartas[cont]);
                        cont++;
		}
                }
                int BtR_X = (int)Math.round(ScreenWidth*0.07);
                int BtR_Y = (int)Math.round(ScreenHeight*0.01);
                int BtR_W = (int)Math.round(ScreenWidth*0.06);
                int BtR_H = (int)Math.round(ScreenHeight*0.1);
                reiniciar.setBounds(BtR_X, BtR_Y, BtR_W, BtR_H);
                reiniciar.setIcon(new ImageIcon(ImgReset.getImage().getScaledInstance(reiniciar.getWidth(), reiniciar.getHeight(), Image.SCALE_DEFAULT)));
                //add(reiniciar);
                reiniciar.addActionListener(
				new ActionListener(){
					@Override
					public void actionPerformed(ActionEvent e) {						
						reset();
					}					
				}
		);
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
						FrameEspanhois partidas = new FrameEspanhois();
                                                partidas.FrameEscolha();
					}					
				}
		);
	}
        public void TabuleiroConflitos(){
            setTitle("Jogo da Memória");
            GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
            gDevice = Graficos.getDefaultScreenDevice();
            gDevice.setFullScreenWindow(this);
            ScreenWidth = this.getWidth();
            ScreenHeight = this.getHeight();
            setContentPane(BgEspanhois);
            setDefaultCloseOperation(EXIT_ON_CLOSE);
            cartas = new Carta[12];
            cartas[0] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);
            cartas[1] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);		
            cartas[2] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);
            cartas[3] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);		
            cartas[4] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);
            cartas[5] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);		
            cartas[6] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);
            cartas[7] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);		
            cartas[8] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta5.png")), this);
            cartas[9] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta5.png")), this);		
            cartas[10] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta6.png")), this);
            cartas[11] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta6.png")), this);
            Embaralhador.Embaralhar(cartas);
            ultimaCartaVirada = null;
            erros = 0;
            paresFormados = 0;
		lock = false;
		//Tabuleiros.setBackground(new Color(0,0,0,0));
		setLayout(null);
                //Tabuleiros.setLayout(null);
                int cont = 0;
                int carta_X = (int)Math.round(ScreenWidth*0.125);
                int carta_Y = (int)Math.round(ScreenHeight*0.275);
                int carta_W = (int)Math.round(ScreenWidth*0.1);
                int carta_H = (int)Math.round(ScreenHeight*0.3);
		for (int i = 0; i < 4; i ++){
                    for (int j = 0; j < 3; j ++){
                        cartas[cont].setBounds((carta_X * i) + 150, (carta_Y * j) + 50, carta_W, carta_H);
			add(cartas[cont]);
                        cont++;
		}
                }
                int BtR_X = (int)Math.round(ScreenWidth*0.07);
                int BtR_Y = (int)Math.round(ScreenHeight*0.01);
                int BtR_W = (int)Math.round(ScreenWidth*0.06);
                int BtR_H = (int)Math.round(ScreenHeight*0.1);
                reiniciar.setBounds(BtR_X, BtR_Y, BtR_W, BtR_H);
                reiniciar.setIcon(new ImageIcon(ImgReset.getImage().getScaledInstance(reiniciar.getWidth(), reiniciar.getHeight(), Image.SCALE_DEFAULT)));
                //add(reiniciar);
                reiniciar.addActionListener(
				new ActionListener(){
					@Override
					public void actionPerformed(ActionEvent e) {						
						reset();
					}					
				}
		);
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
						FrameEspanhois partidas = new FrameEspanhois();
                                                partidas.FrameEscolha();
					}					
				}
		);
	}
        
        public void TabuleiroLiberdade(){
            setTitle("Jogo da Memória");
            GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
            gDevice = Graficos.getDefaultScreenDevice();
            gDevice.setFullScreenWindow(this);
            ScreenWidth = this.getWidth();
            ScreenHeight = this.getHeight();
            setContentPane(BgEspanhois);
            setDefaultCloseOperation(EXIT_ON_CLOSE);
            cartas = new Carta[16];
            cartas[0] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);
            cartas[1] = new Carta(0, new ImageIcon(getClass().getResource("/Imagens/carta1.png")), this);		
            cartas[2] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);
            cartas[3] = new Carta(1, new ImageIcon(getClass().getResource("/Imagens/carta2.png")), this);		
            cartas[4] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);
            cartas[5] = new Carta(2, new ImageIcon(getClass().getResource("/Imagens/carta3.png")), this);		
            cartas[6] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);
            cartas[7] = new Carta(3, new ImageIcon(getClass().getResource("/Imagens/carta4.png")), this);		
            cartas[8] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta5.png")), this);
            cartas[9] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta5.png")), this);		
            cartas[10] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta6.png")), this);
            cartas[11] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta6.png")), this);
            cartas[12] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta7.png")), this);
            cartas[13] = new Carta(4, new ImageIcon(getClass().getResource("/Imagens/carta7.png")), this);		
            cartas[14] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta8.png")), this);
            cartas[15] = new Carta(5, new ImageIcon(getClass().getResource("/Imagens/carta8.png")), this);
            Embaralhador.Embaralhar(cartas);
            ultimaCartaVirada = null;
            erros = 0;
            paresFormados = 0;
		lock = false;
		//Tabuleiros.setBackground(new Color(0,0,0,0));
		setLayout(null);
                //Tabuleiros.setLayout(null);
                int cont = 0;
                int carta_X = (int)Math.round(ScreenWidth*0.1);
                int carta_Y = (int)Math.round(ScreenHeight*0.2);
                int carta_W = (int)Math.round(ScreenWidth*0.1);
                int carta_H = (int)Math.round(ScreenHeight*0.3);
		for (int i = 0; i < 8; i ++){
                    for (int j = 0; j < 2; j ++){
                        cartas[cont].setBounds((carta_X * i) + 200, (carta_Y * j) + 500, carta_W, carta_H);
			add(cartas[cont]);
                        cont++;
		}
                }
                int BtR_X = (int)Math.round(ScreenWidth*0.07);
                int BtR_Y = (int)Math.round(ScreenHeight*0.01);
                int BtR_W = (int)Math.round(ScreenWidth*0.06);
                int BtR_H = (int)Math.round(ScreenHeight*0.1);
                reiniciar.setBounds(BtR_X, BtR_Y, BtR_W, BtR_H);
                reiniciar.setIcon(new ImageIcon(ImgReset.getImage().getScaledInstance(reiniciar.getWidth(), reiniciar.getHeight(), Image.SCALE_DEFAULT)));
                //add(reiniciar);
                reiniciar.addActionListener(
				new ActionListener(){
					@Override
					public void actionPerformed(ActionEvent e) {						
						reset();
					}					
				}
		);
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
						FrameEspanhois partidas = new FrameEspanhois();
                                                partidas.FrameEscolha();
					}					
				}
		);
	
        }

	public void reset(){
		for(int i = 0; i < cartas.length; i++){
			if(cartas[i].isViradaParaCima()){
				cartas[i].mudarPosicao();
			}			
		}
		removeAll();
		Embaralhador.Embaralhar(cartas);
		for(int i = 0; i < cartas.length; i++){
                Tabuleiros.add(cartas[i]);
		}
		ultimaCartaVirada = null;		
		erros = 0;
		paresFormados = 0;
		lock = false;
		revalidate();
		repaint();
	}
	public void acao(Carta carta){
		if(!carta.isViradaParaCima() && !lock){
                    if(ultimaCartaVirada == null){
                        carta.mudarPosicao();				
                            ultimaCartaVirada = carta;
                }else{
           
                    if(carta.equals(ultimaCartaVirada)){
           
                        ultimaCartaVirada = null;
                            carta.mudarPosicao();	
                                paresFormados++;
                                    if(paresFormados == 8){
                                        JOptionPane.showMessageDialog(this,
                                            "O jogo acabou! Quantidade de erros: " + erros,
								"Fim de jogo",
								JOptionPane.INFORMATION_MESSAGE);
						reset();
					}
				}else{
					
					TimerTask t1 = new TimerTask(){
						@Override
						public void run() {
							carta.mudarPosicao();
							lock = true;
						}						
					};
					
					TimerTask t2 = new TimerTask(){
						@Override
						public void run() {
							ultimaCartaVirada.mudarPosicao();
							carta.mudarPosicao();
							ultimaCartaVirada = null;
							erros++;
							lock = false;
						}						
					};
					Timer timer = new Timer();
					timer.schedule(t1, 1);
					timer.schedule(t2, 1000);
				}
			}
		}
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
