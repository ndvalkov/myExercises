using System;
using System.Numerics;

class Program
{
    static void Main()
    {

        Console.WriteLine("Please, enter a number: ");
        int number = int.Parse(Console.ReadLine());

        int [,] numbersSpiral = new int[number, number];

        int nextNumber = 1;
        int lastNumber = number * number;

        for (int column = 0; column < number; column++)
        {
            numbersSpiral[0, column] = nextNumber;
            nextNumber++;
        }

        for (int counter = 1; counter < number; counter++)
        {

            int row = counter; 
            int column = number - counter;

            for (int i = row; i <= (number - counter); i++)
            {
                numbersSpiral[i, column] = nextNumber;
                nextNumber++;
                
                if (i < (number - counter))
                {
                  row++;
                } 
                
            }

            if (nextNumber > lastNumber)
            {
                break;
            }

            column--;

            for (int i = column; i >= (counter - 1); i--)
            {
                numbersSpiral[row, i] = nextNumber;
                nextNumber++;
                if (i > (counter - 1))
                {
                  column--;
                } 
            }

            if (nextNumber > lastNumber)
            {
                break;
            }

            row--;

            for (int i = row; i >= counter; i--)
            {
                numbersSpiral[i, column] = nextNumber;
                nextNumber++;
                if (i > counter)
                {
                  row--; 
                } 
            }

            if (nextNumber > lastNumber)
            {
                break;
            }

            column++;

            for (int i = column; i <= (number - (counter + 1)); i++)
            {
                numbersSpiral[row, i] = nextNumber;
                nextNumber++;

                if (i < (number - (counter + 1)))
                {
                    column++;
                }
               
            }

            if (nextNumber > lastNumber)
            {
                break;
            }
        }

        Console.WriteLine(); 
        
        for (int row = 0; row < number; row++)
        {
            for (int column = 0; column < number; column++)
            {
                Console.Write(numbersSpiral[row, column] + "  ");
            }
            Console.WriteLine();
        }
    }
}

