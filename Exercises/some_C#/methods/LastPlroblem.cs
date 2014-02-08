using System;
using System.Collections.Generic;


class Program
{
    static void Main()
    {

        //3x2 + x – 3
        
        Console.WriteLine("Enter the first polynomial: ");
        string firstPoli = Console.ReadLine();
        Console.WriteLine("Enter the second polynomial: ");
        string secondPoli = Console.ReadLine();

        string[] splitFirst = new string[100];
        string[] splitSecond = new string[100];

        splitFirst = firstPoli.Split(' ');
        splitSecond = secondPoli.Split(' ');

        List<string> firstList = new List<string>();
        List<string> secondList = new List<string>();

        ConcatenateSignsAndValues(splitFirst, firstList);
        ConcatenateSignsAndValues(splitSecond, secondList);


        List<int[]> firstListArrInt = new List<int[]>();
        List<int[]> secondListArrInt = new List<int[]>();


        changeListStringToListArrInt(firstListArrInt, firstList);
        changeListStringToListArrInt(secondListArrInt, secondList);




        List<int[]> finalListArrInt = new List<int[]>();

        for (int i = 0; i < firstListArrInt.Count; i++)
        {

            for (int j = 0; j < secondListArrInt.Count; j++)
            {

                
                finalListArrInt.Add(MultiplyArrays(firstListArrInt[i], secondListArrInt[j]));

            }

        }

        for (int i = 0; i < finalListArrInt.Count; i++)
		{
			    
            for (int j = i + 1; j < finalListArrInt.Count; j++)
		    {
			    int[] temp = SumOfArrays(finalListArrInt[i], finalListArrInt[j]);
                if (temp[0] != 0)
	            {
		            finalListArrInt[i] = temp;
                    finalListArrInt[j] = new int[] {0, 0};


	            }

            }

		}


        //printing final list

        for (int i = 0; i < finalListArrInt.Count; i++)
			{
			    
                int[] tempArr = finalListArrInt[i];
                
                if (tempArr.Length == 1)
	            {
		            Console.WriteLine(tempArr[0]);
	            }
                
                else if (tempArr[0] == 1)
	            {
		            Console.Write("x");
	            }
                else if (tempArr[0] == -1)
	            {
		            Console.Write("- x");
	            }
                else 
	            {
		            Console.Write("{0}", tempArr[0] + "x" );
	            }
                
                if (tempArr[1] != 1)
	            {
		            Console.Write(tempArr[0]);
	            }
                else
	            {
                    Console.Write(" ");
	            }
            
            }

    }

    static void ConcatenateSignsAndValues(string[] splitFirst, List<string> firstArray)
    {
        for (int i = 0; i < splitFirst.Length - 1; i++)
		{
            
            if (splitFirst[i] == " ")
	        {
		        continue;
	        }
            
            if (splitFirst[i] == "+" || splitFirst[i] == "-")
	        {
		        string temp = (splitFirst[i] + splitFirst[i+1]);

                firstArray.Add(temp);
                splitFirst[i+1] = " ";
                

	        }
            else
            {
                firstArray.Add(splitFirst[i]);
            }

            
        }
    }

    static void changeListStringToListArrInt(List<int[]> listArrInt, List<string> anyListString)
    {

        for (int i = 0; i < anyListString.Count; i++)
        {

            if (i == (anyListString.Count - 1))
            {

                string temp = anyListString[i];
                int[] arr = new int[1];

                if (temp[0] == '+')
                {
                    
                    string[] arStri = temp.Split('+','-');
                    arr[0] = int.Parse(arStri[1]);

                    
                }

                if (temp[0] == '-')
                {

                    string[] arStri = temp.Split('+', '-');
                    arr[0] = -(int.Parse(arStri[1]));


                }

                listArrInt.Add(arr);
                break;
            }

            string temporary = anyListString[i];
            int[] tempArr = new int[2];
            

            string[] temporString = temporary.Split('+', '-', 'x');

            if ((i == 0) && (temporary[0] != '-') && (temporString[1] != ""))
            {
                tempArr[0] = int.Parse(temporString[0]);
                tempArr[1] = int.Parse(temporString[1]);
                listArrInt.Add(tempArr);
                continue;
            }


            if ((temporString[0] == "") && (temporString[temporString.Length - 1] == ""))
            {
                tempArr[0] = -(int.Parse(temporString[1]));
                tempArr[1] = 1;
            }

            if ((temporString[0] == "") && (temporString[temporString.Length - 1] != ""))
            {
                if (temporary[0] == '-')
                {
                    tempArr[0] = -(int.Parse(temporString[1]));
                    tempArr[1] = int.Parse(temporString[2]);
                }
                else
                {
                    tempArr[0] = 1;
                    tempArr[1] = int.Parse(temporString[2]); 
                }   
                
            }

            else if ((temporString[0] == "") && (temporary[temporary.Length - 1] != 'x'))
            {
                if (temporary[0] == '-')
                {
                    tempArr[0] = -(int.Parse(temporString[1]));
                    tempArr[1] = int.Parse(temporString[2]);
                }
                else
                {
                    tempArr[0] = int.Parse(temporString[1]);
                    tempArr[1] = int.Parse(temporString[2]);  
                } 
            }
            else
            {
                if (temporary[0] == '-')
                {
                    tempArr[0] = -(int.Parse(temporString[1]));
                    tempArr[1] = 1;
                }
                else
                {
                    tempArr[0] = int.Parse(temporString[1]);
                    tempArr[1] = 1;
                }
            }

            listArrInt.Add(tempArr);

        }

    }

    static int[] MultiplyArrays(int[] firstArray, int[] secondArray)
    {

        int[] ProductArray = new int[2];

        if ((firstArray.Length == 2) && (secondArray.Length == 2))
        {

            ProductArray[0] = firstArray[0] * secondArray[0];
            ProductArray[1] = firstArray[1] + secondArray[1];
            return ProductArray;
        }
        else if ((firstArray.Length == 2) && (secondArray.Length == 1))
        {
            ProductArray[0] = firstArray[0] * secondArray[0];
            ProductArray[1] = firstArray[1];
            return ProductArray;
        }
        else if ((firstArray.Length == 1) && (secondArray.Length == 2))
        {
            ProductArray[0] = firstArray[0] * secondArray[0];
            ProductArray[1] = secondArray[1];
            return ProductArray;
        }
        else
        {
            ProductArray = new int[1];
            ProductArray[0] = firstArray[0] * secondArray[0];
            return ProductArray;
        }



    }

    static int[] SumOfArrays(int[] firstArray, int[] secondArray)
    {
        int[] sumArray = new int[1];

        if ((firstArray.Length == 1) && (secondArray.Length == 1))
        {
            sumArray[0] = firstArray[0] + secondArray[0];
            return sumArray;
        }

        sumArray = new int[2];

        if ((firstArray.Length == secondArray.Length) && (firstArray[1] == secondArray[1]))
        {
            sumArray[0] = firstArray[0] + secondArray[0];
            sumArray[1] = firstArray[1];
            return sumArray;
        }
        else
        {
            return sumArray;
        }
 
        
    }



    




    
}

