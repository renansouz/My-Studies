package nvsnmemoria.JogoDaMemoria;

import java.util.Random;

public class Embaralhador {
    public static void Embaralhar(Object[] a){
		Random rnd = new Random();
		for(int i = a.length - 1; i > 0; i--){
			int randomNumber = rnd.nextInt(i + 1);
			trocar(a, i, randomNumber);
		}
	}
	//troca a posi��o entre dois objetos no array
	private static void trocar(Object[] a, int i, int j){
		Object temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}
