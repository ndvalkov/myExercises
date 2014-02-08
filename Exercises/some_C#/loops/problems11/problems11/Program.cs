using System;
using System.Numerics;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number: ");
        int number = int.Parse(Console.ReadLine());

        
        BigInteger factorial = 1;

        for (int counter = 1; counter <= number; counter++)
        {
            factorial *= counter;

        }

        Console.WriteLine(factorial);
        int numberOfZeros = 0;

        while (factorial % 10 == 0)
	    {
            factorial /= 10;

            numberOfZeros++;
	    }

        
        Console.WriteLine("There are {0} zeros at the the end of the factorial of number {1}.",numberOfZeros, number);
    }
}

