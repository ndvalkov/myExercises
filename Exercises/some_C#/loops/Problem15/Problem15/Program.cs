using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a hexadecimal number: ");
        string hexNumber = Console.ReadLine();

        int[] arrayNumber = new int[20];

        int midSum = 0;
        int decimalNumber = 0;

        for (int index = 0; index < hexNumber.Length; index++)
        {
            char indexChar = hexNumber[index];
            
            if (indexChar == 'a' || indexChar == 'A')
            {
                arrayNumber[index] = 10;
            }
            else if (indexChar == 'b' || indexChar == 'B')
            {
                arrayNumber[index] = 11;
            }

            else if (indexChar == 'c' || indexChar == 'C')
            {
                arrayNumber[index] = 12;
            }

            else if (indexChar == 'd' || indexChar == 'D')
            {
                arrayNumber[index] = 13;
            }

            else if (indexChar == 'e' || indexChar == 'E')
            {
                arrayNumber[index] = 14;
            }

            else if (indexChar == 'f' || indexChar == 'F')
            {
                arrayNumber[index] = 15;
            }
            else
            {
                int digit = (int)Char.GetNumericValue(indexChar);
                arrayNumber[index] = digit;
            }
            
        }

        for (int index = 0; index < hexNumber.Length; index++)
        {
            
            int power = hexNumber.Length - (index + 1);
            midSum = arrayNumber[index];
            int product = 16;

            for (int counter = 1; counter <= power; counter++)
            {
                midSum *= product;
            }

            if (power == 0)
            {
                break;
            }

            decimalNumber += midSum;
        }

        decimalNumber += arrayNumber[hexNumber.Length - 1];

        Console.WriteLine(decimalNumber);
    }
}

