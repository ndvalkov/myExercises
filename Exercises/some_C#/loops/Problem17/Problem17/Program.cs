using System;
using System.Text;
using System.Collections.Generic;

class Program
{

    static StringBuilder expression = new StringBuilder();
    static StringBuilder subString = new StringBuilder();
    static List<double> exprDouble = new List<double>();
    
    static int subStringIndex;

    static void Main()
    {
        
        
        
        //Console.WriteLine("Enter expression: ");
        //expression = expression.Append(Console.ReadLine());

        expression.Append("2*4-17/34 + 21*(22 - 11)");

        //GetSubStringInBrackets(expression, subString);
        //ConvertSubStringToListDouble(subString, exprDouble);

        double sumOfCalculation = CalculateValueOfDecList(exprDouble);

        //expression.Remove(subStringIndex, 1);
        //expression.Insert(subStringIndex, sumOfCalculation.ToString());

        bool areWithBrackets = true;

        while (areWithBrackets)
        {

            for (int i = 0; i < expression.Length; i++)
            {

                if (expression[i] == ')' || expression[i] == '(')
                {
                    areWithBrackets = true;
                    break;
                
                }

                else
                {
                    areWithBrackets = false;
                }

            }

            if (areWithBrackets == false)
            {

                ConvertSubStringToListDouble(expression, exprDouble);
                sumOfCalculation = CalculateValueOfDecList(exprDouble);

                double finalSum = sumOfCalculation;
                Console.WriteLine();
                Console.Write("The result is: {0}", finalSum);

            }
            else
            {
                GetSubStringInBrackets(expression, subString);

                ConvertSubStringToListDouble(subString, exprDouble);

                sumOfCalculation = CalculateValueOfDecList(exprDouble);

                expression.Remove(subStringIndex, 1);

                expression.Insert(subStringIndex, sumOfCalculation.ToString());

                exprDouble.Clear();

            }
            
        }



    }


    static double CalculateValueOfDecList(List<double> exprDouble)
    {

        double sum = 0;
        
        for (int i = 0; i < exprDouble.Count; i++)
        {
            
            
            if (exprDouble[i] == (-6))
            {
                exprDouble[i] = Math.Sqrt(exprDouble[i + 1]);
                exprDouble.RemoveAt(i + 1);
            }
        }


        for (int i = 0; i < exprDouble.Count; i++)
        {
            if (exprDouble[i] == (-5))
            {
                exprDouble[i] = Math.Log(exprDouble[i + 1]);
                exprDouble.RemoveAt(i + 1);
            }
        }

        for (int i = 0; i < exprDouble.Count; i++)
        {
            if (exprDouble[i] == (-4))
            {
                exprDouble[i] = exprDouble[i - 1] / exprDouble[i + 1];
                exprDouble.RemoveAt(i + 1);
                exprDouble.RemoveAt(i - 1);
            }
        }

        for (int i = 0; i < exprDouble.Count; i++)
        {
            if (exprDouble[i] == (-3))
            {
                exprDouble[i] = exprDouble[i - 1] * exprDouble[i + 1];
                exprDouble.RemoveAt(i + 1);
                exprDouble.RemoveAt(i - 1);
                
            }
        }

        for (int i = 0; i < exprDouble.Count; i++)
        {

            if ((i == 0) && exprDouble[0] != (-1) && exprDouble[0] != (-2) )
            {
                sum += exprDouble[0];
            }

            else if (exprDouble[i] == (-2))
                 {
                    sum += exprDouble[i + 1];
                 }

            else if (exprDouble[i] == (-1))
                 {
                    sum -= exprDouble[i + 1];
                 }
             
        }

        return sum;
    }


    
    
    static void ConvertSubStringToListDouble(StringBuilder subString, List<double> exprDouble)
    {
        
        StringBuilder temp = new StringBuilder();
        double tempDouble;
        

        for (int i = 0; i < subString.Length; i++)
        {

            
            switch (subString[i])
            {
                case '-':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-1);
                        }
                        else
                        {


                            tempDouble = double.Parse(temp.ToString());
                            exprDouble.Add(tempDouble);
                            exprDouble.Add(-1);
                            temp.Clear();
                        }
                        break;
                    }

                case '+':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-2);
                        }
                        else
                        {
                            tempDouble = double.Parse(temp.ToString());
                            exprDouble.Add(tempDouble);
                            exprDouble.Add(-2);
                            temp.Clear();
                        }
                        break;
                    }
                case '*':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-3);
                        }
                        else
                        {
                            tempDouble = double.Parse(temp.ToString());
                            exprDouble.Add(tempDouble);
                            exprDouble.Add(-3);
                            temp.Clear();
                        }
                        break;
                    }
                case '/':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-4);
                        }
                        else
                        {
                            tempDouble = double.Parse(temp.ToString());
                            exprDouble.Add(tempDouble);
                            exprDouble.Add(-4);
                            temp.Clear();
                        }
                        break;
                    }
                case 'l':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-5);
                        }
                        else
                        {
                            
                            exprDouble.Add(-5);
                            temp.Clear();
                        }
                        break;
                    }
                case 's':
                    {
                        if (i == 0)
                        {
                            exprDouble.Add(-6);
                        }
                        else
                        {
                            
                            exprDouble.Add(-6);
                            temp.Clear();
                        }
                        break;
                    }
                case 'q':
                case 'r':
                case 't':
                case 'n':
                case ' ':
                    break;

                default:
                    {
                        temp.Append(subString[i]);

                        if (i == (subString.Length - 1))
                        {
                            tempDouble = double.Parse(temp.ToString());
                            exprDouble.Add(tempDouble);
                        }
                    }
                    break;
                    
            }



        }






    }
    
    
    
    
    
    
    
    
    
    static void GetSubStringInBrackets(StringBuilder expression, StringBuilder subString)
    {
        int firstIndex = 0;
        int secondIndex = 0;
        
        
        for (int i = 0; i < expression.Length; i++)
        {

            if (secondIndex != 0)
            {
                break;
            }
            
            if (expression[i] == ')')
            {
                secondIndex = i;

                for (int j = i; j >= 0; j--)
                {
                    if (expression[j] == '(')
                    {
                        firstIndex = j;
                        break;
                    }
                }

                for (int k = firstIndex + 1; k < secondIndex; k++)
                {
                    subString.Append(expression[k]);
                }

                expression.Remove(firstIndex, secondIndex - firstIndex);
                subStringIndex = firstIndex;
            }


        }


    }

}

