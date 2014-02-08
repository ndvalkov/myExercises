using System;

class Program
{
    static void Main()
    {

        Console.WriteLine("Enter a positive number: ");
        int number = int.Parse(Console.ReadLine());

        Random rand = new Random();

        int[] arrayNumbers = new int[number];

        //for (int i = 0; i < number; i++)
        //{
        //    arrayNumbers[i] = 0;
        //}

        for (int nextNumber = 1; nextNumber <= number; nextNumber++)
        {
            int index = 0;

            bool condition = true;

            while (condition)
            {
                index = rand.Next(number);

                if (arrayNumbers[index] == 0)
                {
                    condition = false;
                }

            }
              

            arrayNumbers[index] = nextNumber;

        }

        foreach (var item in arrayNumbers)
        {
            Console.Write(item.ToString() + " ");
        }
    }
}

