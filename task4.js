function gcf(a,b){
    /*
    This function's purpose is to generate the greatest common factor between two numbers. 
    It uses the euclidean algorithm to get the answer. 
    The euclidean aglorithm is an extremely important algortihm in the areas of cryptography and math. 

    The Euclidean Algorithm for finding GCD(A,B) is as follows (khanacademy, 2020):
        If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
        If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.  
        Write A in quotient remainder form (A = B⋅Q + R)
        Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)   

    */

    //First, ensure the values are positive. This adds an extra layer of security in the answer. 
    //The euclidean algortihm isn't necessarily only for positive numbers, but it is good practice to work with absolute values to ensure consistent results.
    a= Math.abs(a);
    b= Math.abs(b);
    let r;

    while (b!=0){ //The algorihtm stops when the remainder between a and b is 0
        r = a%b; //Getting the remainder using mod operator. 
        a=b; //Moving variables to next cycle.
        b=r;
    }
    return a;
}

console.log(gcf(36,54)); //This is a test case. You are welcome to try any combination of numbers.