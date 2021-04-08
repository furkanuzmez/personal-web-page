---
title: Signature Comparison with Processing
date: "2019-05-19T21:28:03+00:00"
description: "Image Processing Lectures, Image Filters ,Gradients,Research Paper,Laplacian, Sobel etc..."
subjects: ["image processing","processing","IT"]
---

##Signature Comparison- Processing Language

```python 

PImage img;
PImage img2;

size(1200, 1200);
img = loadImage("test.jpg");
img2 = loadImage("test2.jpg");
loadPixels(); 
PrintWriter output;
PrintWriter output2;
 output = createWriter("positions1.txt"); 
 output2 = createWriter("positions2.txt"); 
    println(img.height);
    println(img.width);
     
String s = "The values are gradient and degree ";
//float c = 1.0 / 16.0;
int iwidth;
int iheight;
int iwidth2;
int iheight2;
float simust =0;
float simalt =0;
float sum1 = 0;
float sum2 = 0;
float[][] filterx = {{ -1,  -2,  -1 }, 
                    { 0, 0,0}, 
                    {1,  2,  1 }};
                    
                    
  float[][] filtery = {{ -1, 0,  1 }, 
                    { -2,0,2}, 
                    { -1,  0,  1 }};
int con = 91;
int vector = 4;
   float[][] Container = new float[con][vector];;
   float[][] Containers = new float[con][vector];; 
iwidth =img.width;
iheight=img.height;
iwidth2 =img2.width;
iheight2=img2.height;

  int h = 0 ;
  int k= 0;
  
  
  // Sobel Filter Gradient Calculations INPUT 1 
for (int y = 1; y < img.height-1; y++) 
  for (int x = 1; x < img.width-1; x++) {
   float response1x = 0;
    float response1y = 0;
    float response1t = 0;
     float degree;
    for (int ky = -1; ky <= 1; ky++) 
      for (int kx = -1; kx <= 1; kx++) {
        int index = (y + ky) * img.width + (x + kx); // SOBEL X 
        float r = brightness(img.pixels[index]);
        response1x += filterx[ky+1][kx+1] * r;
       
      }
       for (int ky = -1; ky <= 1; ky++) 
      for (int kx = -1; kx <= 1; kx++) {
        int index = (y + ky) * img.width + (x + kx); // SOBEL Y
        float r = brightness(img.pixels[index]);
        response1y += filtery[ky+1][kx+1] * r;
       
      }
    //  println(response1x);
      //println(response1y);
    // x y gradient  
    response1t = sqrt(pow(response1x,2)+pow(response1y,2)); // x y total gradient calculatıons
      // arctan  
      degree = atan2(response1y, response1x);
      
    pixels[y*img.width + x] = color(response1t);
   //  println("========================");
        //    println(s);
         //   println("x coordinates",x);
          //  println("y coordinates",y);
            
  
            
            int  x9,y9; 
           // int k;
            x9= x/(iwidth/ 9 );    // container divede by 9 
            y9= y/(iheight / 9) ;  // container divede by 9 
            k = int(x9 + int(y9*9));
          //  println("box/9xx",x9);
          //  println("box/9yy",y9);
          //  println("container",k);
            
           //  println("img.width / 9",iwidth/9);
         //   println("img.height / 9",iheight/9);
          //  println("xy gradient ",response1t);
            if(response1y <= 0 && response1x <= 0 ) { //------------
            Container[k][2] += response1x ;
            Container[k][3] += response1y;
         //   println("arctan ",degree);
          //  println("x gradient ",response1x);
           // println("y gradient ",response1y);
          //  println(k);
          //  println("x gradient ", Container[k][2]);
          //  println("y gradient ", Container[k][3]);
          //  println("e2,e3");
         //   println("========================");
            }
            else if (response1y <= 0 && response1x >= 0 ) {// ++++-----
            Container[k][0] += response1x ;
            Container[k][3] += response1y;
          //   println("arctan ",degree);
           //  println("x gradient ",response1x);
            // println("y gradient ",response1y);
            //  println(k);
          //   println("x gradient ", Container[k][0]);
          //  println("y gradient ", Container[k][3]);
          //   println("e0,e3");
          //   println("========================");
            }
             else if (response1y >= 0 && response1x >= 0 ) {
               Container[k][0] += response1x;
               Container[k][1] += response1y;
          //   println("arctan ",degree);
          //   println("x gradient ",response1x);
          //   println("y gradient ",response1y);
           //     println(k);
           //  println("x gradient ", Container[k][0]);
          //  println("y gradient ", Container[k][1]);
           //  println("e0,e1");
          //   println("========================");
            }
            else if (response1y >= 0 && response1x <= 0 ) {
              Container[k][1] +=  response1x ;
              Container[k][2] +=  response1y;
          //  println("arctan ",degree);
          //  println("x gradient ",response1x);
          //  println("y gradient ",response1y);
          //     println(k);
         //   println("x gradient ", Container[k][1]);
          //  println("y gradient ", Container[k][2]);
          //  println("e1,e2");
           // println("========================");
             }
             }
                updatePixels();
              
             //*********************************************************************************************
          
            
      //Sobel Filter Gradient Calculation Input 2       
             
             for (int y = 1; y < img2.height-1; y++) 
  for (int x = 1; x < img2.width-1; x++) {
    float response2x = 0;
    float response2y = 0;
    float response2t = 0;
     float degree;
    for (int ky = -1; ky <= 1; ky++) 
      for (int kx = -1; kx <= 1; kx++) {
        int index = (y + ky) * img2.width + (x + kx);
        float r = brightness(img2.pixels[index]);
        response2x += filterx[ky+1][kx+1] * r;
       
      }
       for (int ky = -1; ky <= 1; ky++) 
      for (int kx = -1; kx <= 1; kx++) {
        int index = (y + ky) * img2.width + (x + kx);
        float r = brightness(img2.pixels[index]);
        response2y += filtery[ky+1][kx+1] * r;
       
      }
     // println(response2x);
     // println(response2y);
       response2t = sqrt(pow(response2x,2)+pow(response2y,2));
       degree = atan(response2y/response2x);
    pixels[y*img2.width + x] = color(response2t);
    // println("========================");
           // println(s);
           // println("x coordinates",x);
           // println("y coordinates",y);
           
            float  x9,y9 ; 
           x9= x/(iwidth2/ 9 );
           y9= y/(iheight2 / 9) ;
         
          h = int(x9 + int(y9*9));
           // println("box/9",x9);
           // println("box/9",y9);
           // println("container",h);
           // println("img.width / 9",iwidth/9);
          //  println("img.height / 9",iheight/9);
          //  println("xy gradient ",response2t);
            if(response2y <= 0 && response2x <= 0 ) { //------------
             Containers[h][2] += response2x ;
             Containers[h][3] += response2y;
          //  println("arctan ",degree);
           // println("x gradient ",response2x);
          //  println("y gradient ",response2y);
          //  println("e2,e3");
          //  println("========================");
            }
            else if (response2y <= 0 && response2x >= 0 ) {// ++++-----
             Containers[h][0] += response2x ;
             Containers[h][3] += response2y;
            // println("arctan ",degree);
            // println("x gradient ",response2x);
            // println("y gradient ",response2y);
           //  println("e0,e3");
           //  println("========================");
            }
             else if (response2y >= 0 && response2x >= 0 ) {
               Containers[h][0] += response2x;
               Containers[h][1] += response2y;
          //println("arctan ",degree);
           //  println("x gradient ",response2x);
           //  println("y gradient ",response2y);
           // println("e0,e1");
          //    println("========================");
            }
            else if (response2y >= 0 && response2x <= 0 ) {
               Containers[h][1] +=  response2x ;
               Containers[h][2] +=  response2y;
            //println("arctan ",degree);
            // println("x gradient ",response2x);
           //  println("y gradient ",response2y);
           // println("e1,e2");
           //   println("========================");
             }
             }
             for (int i = 0; i <= k; i++) {
  for (int j = 0; j < 4; j++) {
    //println("container",i);
   // println(Container[i][j]);
   output.println("<..Block.>["+i+ "]<e=>[" + j+"]<..>"+ Container[i][j]);
  }
}
 for (int i = 0; i <= h; i++) {
  for (int j = 0; j < 4; j++) {
   // println("ContainerS",i);
    //println(Containers[i][j]);
   output2.println("<..Block.>["+i+ "]<e=>[" + j+"]<..>"+ Containers[i][j]);
  }
}
int list;
if ( h <= k ) 
{
  list = k ;
}
else {
 list = h ;
}
 for (int i = 0; i <=list; i++) {
  for (int j = 0; j < 4; j++) {
   
  simust += Container[i][j] * Containers[i][j];
  sum1 +=  pow(Container[i][j],2);
  sum2 +=  pow(Containers[i][j],2);

  }
}
  
  float balt = sqrt(sum1)*sqrt(sum2);
  println("sımust",simust);
  println("sum1",sum1);
   println("sum2",sum2);
    float eqq = simust/balt;
  println("balt",balt);
  println("==================================");
   println("result",eqq);
  println("=================================");
    //println("list",list);
   // println("k",k);
   // println("h",h);
          updatePixels();
  
  
  image(img,60,200);
  image(img2,601,200);
 output.flush(); // Writes the remaining data to the file
 output.close(); // Finishes the file
 output2.flush(); // Writes the remaining data to the file
 output2.close();
  // Stops the program

```



