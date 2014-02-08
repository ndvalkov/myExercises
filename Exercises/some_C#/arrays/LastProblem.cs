using System;
using System.Collections.Generic;

class Program
{
    public static int Counter = 1;
    public static int maxCounter = 0;
    public static int[,] maxMatrix;

    static void Main()
    {


        //Console.WriteLine("Enter number of row for the matrix: ");
        //int rows = int.Parse(Console.ReadLine());
        //Console.WriteLine("Enter number of columns for the matrix: ");
        //int columns = int.Parse(Console.ReadLine());

        //int rows = 4; 
        //int columns = 4;

        //Random rnd = new Random();
        //int[,] matrix = new int[rows,columns];

        //for (int row = 0; row < matrix.GetLength(0); row++)
        //{
        //    for (int column = 0; column < matrix.GetLength(1); column++)
        //    {
        //        matrix[row, column] = rnd.Next(10);
        //    }
        //}

        int[,] matrix = new int[4, 4]
        {
            {5, 5, 1, 0},
            {3, 4, 1, 4},
            {7, 7, 2, 3},
            {5, 7, 3, 8}
        };
        
        int[,] matrix2 = new int[4, 4]
        {
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0}
        };


        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                CheckAttachedCells(matrix, matrix2, i, j);
            }
        }

        
        
        for (int i = 0; i < maxMatrix.GetLength(0); i++)
        {
            for (int j = 0; j < maxMatrix.GetLength(1); j++)
            {
                Console.Write(maxMatrix[i,j] + " ");
            }
            Console.WriteLine();
        }

        Console.WriteLine();
        Console.WriteLine("The highest number of equal elements is: {0}", maxCounter);
    
    }
        

        public static void CheckAttachedCells(int[,] matrix, int[,] matrix2, int row, int column)
        {


            if (((column + 1) < matrix.GetLength(1)) && (matrix[row, column] == matrix[row, column + 1]))
           {
               if(matrix2[row, column + 1] == 0)
               {
                   matrix2[row, column + 1] = matrix[row, column + 1];
                   Counter++;
                   CheckAttachedCells(matrix, matrix2, row, column + 1);
               }

           }

            else if (((row + 1) < matrix.GetLength(0)) && (matrix[row, column] == matrix[row + 1, column]))
           {
               if(matrix2[row + 1, column] == 0)
               {
                   matrix2[row + 1, column] = matrix[row + 1, column];
                   Counter++;
                   CheckAttachedCells(matrix, matrix2, row + 1, column);
               }

           }
            else if(((row - 1) >= 0) && (matrix[row, column] == matrix[row - 1, column]))
           {
               if(matrix2[row - 1, column] == 0)
               {
                   matrix2[row - 1, column] = matrix[row - 1, column];
                   Counter++;
                   CheckAttachedCells(matrix, matrix2, row - 1, column);
               }

           }
            else if (((column - 1) >= 0) && (matrix[row, column] == matrix[row, column - 1]))
           {
               if(matrix2[row, column - 1] == 0)
               {
                   matrix2[row, column - 1] = matrix[row, column - 1];
                   Counter++;
                   CheckAttachedCells(matrix, matrix2, row, column - 1);
               }

           }

           if (Counter > maxCounter)
           {
               maxCounter = Counter;
               maxMatrix = matrix2;
           }


        }



    }


