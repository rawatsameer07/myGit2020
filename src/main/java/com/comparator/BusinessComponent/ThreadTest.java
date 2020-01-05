package com.comparator.BusinessComponent;

public class ThreadTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ThreadTest t=new ThreadTest();
		new Thread() {public void run(){try {
			t.show1();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}}
		}.start();  
		new Thread() {public void run(){try {
			t.show2();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}}
		}.start();  
	}
	synchronized	public void show1() throws Exception {
		
		System.out.println("Hello1");
		try{wait();}catch(Exception e){} 
		System.out.println("Hello3");
		
	}
	synchronized public void show2() throws Exception {
		System.out.println("Hello2");
		notify();
		
	}

}
