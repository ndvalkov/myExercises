using System;

class Problem
{
    static void Main()
    {

        Console.Write("Въведете число от 0 до 999: ");
        string str = Console.ReadLine();
        int number = int.Parse(str);
        int secondDigit = 0;
        int firstDigit = 0;
        int thirdDigit = 0;

        string[] nulaDoDevetnaiset = {"нула", "едно", "две", "три", "четири", "пет", "шест", "седем", "осем",
                                        "девет", "десет", "единадесет", "дванадесет", "тринадесет", "четиринадесет", 
                                        "петнадесет", "шестнадесет", "седемнадесет", "осемнадесет", "деветнадесет"};
        string[] desetitsi = {"десет", "двадесет", "тридесет", "четиридесет", "петдесет", "шестдесет", "седемдесет",
                                 "осемдесет", "деветдесет"};
        string[] stotitsi = {"сто", "двеста", "триста", "четиристотин", "петстотин", "шестотин", "седемстотин",
                                "осемстотин", "деветстотин"};


        if (number < 20)
        {
            switch (number)
            {
                case 0: Console.Write(nulaDoDevetnaiset[0]); break;
                case 1: Console.Write(nulaDoDevetnaiset[1]); break;
                case 2: Console.Write(nulaDoDevetnaiset[2]); break;
                case 3: Console.Write(nulaDoDevetnaiset[3]); break;
                case 4: Console.Write(nulaDoDevetnaiset[4]); break;
                case 5: Console.Write(nulaDoDevetnaiset[5]); break;
                case 6: Console.Write(nulaDoDevetnaiset[6]); break;
                case 7: Console.Write(nulaDoDevetnaiset[7]); break;
                case 8: Console.Write(nulaDoDevetnaiset[8]); break;
                case 9: Console.Write(nulaDoDevetnaiset[9]); break;
                case 10: Console.Write(nulaDoDevetnaiset[10]); break;
                case 11: Console.Write(nulaDoDevetnaiset[11]); break;
                case 12: Console.Write(nulaDoDevetnaiset[12]); break;
                case 13: Console.Write(nulaDoDevetnaiset[13]); break;
                case 14: Console.Write(nulaDoDevetnaiset[14]); break;
                case 15: Console.Write(nulaDoDevetnaiset[15]); break;
                case 16: Console.Write(nulaDoDevetnaiset[16]); break;
                case 17: Console.Write(nulaDoDevetnaiset[17]); break;
                case 18: Console.Write(nulaDoDevetnaiset[18]); break;
                case 19: Console.Write(nulaDoDevetnaiset[19]); break;
            }
       }
        else if (number < 100)
        {
            secondDigit = number % 10;
            firstDigit = number / 10;

            switch (firstDigit)
            {
                case 2: Console.Write(desetitsi[1]); break;
                case 3: Console.Write(desetitsi[2]); break;
                case 4: Console.Write(desetitsi[3]); break;
                case 5: Console.Write(desetitsi[4]); break;
                case 6: Console.Write(desetitsi[5]); break;
                case 7: Console.Write(desetitsi[6]); break;
                case 8: Console.Write(desetitsi[7]); break;
                case 9: Console.Write(desetitsi[8]); break;
            }
            switch (secondDigit)
            {
                case 0: break;
                case 1: Console.Write(" и " + nulaDoDevetnaiset[1]); break;
                case 2: Console.Write(" и " + nulaDoDevetnaiset[2]); break;
                case 3: Console.Write(" и " + nulaDoDevetnaiset[3]); break;
                case 4: Console.Write(" и " + nulaDoDevetnaiset[4]); break;
                case 5: Console.Write(" и " + nulaDoDevetnaiset[5]); break;
                case 6: Console.Write(" и " + nulaDoDevetnaiset[6]); break;
                case 7: Console.Write(" и " + nulaDoDevetnaiset[7]); break;
                case 8: Console.Write(" и " + nulaDoDevetnaiset[8]); break;
                case 9: Console.Write(" и " + nulaDoDevetnaiset[9]); break;
            }   
        }
        else if (number < 1000)
        {
            thirdDigit = number % 10;
            secondDigit = (number / 10) % 10;
            firstDigit = number / 100;

            switch(firstDigit)
            {
                case 1: Console.Write(stotitsi[0]); break;
                case 2: Console.Write(stotitsi[1]); break;
                case 3: Console.Write(stotitsi[2]); break;
                case 4: Console.Write(stotitsi[3]); break;
                case 5: Console.Write(stotitsi[4]); break;
                case 6: Console.Write(stotitsi[5]); break;
                case 7: Console.Write(stotitsi[6]); break;
                case 8: Console.Write(stotitsi[7]); break;
                case 9: Console.Write(stotitsi[8]); break;
            }
            if (thirdDigit == 0)
            {
                switch(secondDigit)
                {
                    case 0: break;
                    case 1: Console.Write(" и " + desetitsi[0]); break;
                    case 2: Console.Write(" и " + desetitsi[1]); break;
                    case 3: Console.Write(" и " + desetitsi[2]); break;
                    case 4: Console.Write(" и " + desetitsi[3]); break;
                    case 5: Console.Write(" и " + desetitsi[4]); break;
                    case 6: Console.Write(" и " + desetitsi[5]); break;
                    case 7: Console.Write(" и " + desetitsi[6]); break;
                    case 8: Console.Write(" и " + desetitsi[7]); break;
                    case 9: Console.Write(" и " + desetitsi[8]); break;
                }
            }
            if (secondDigit == 0)
            {
                switch (thirdDigit)
                {
                    case 0: break;
                    case 1: Console.Write(" и " + nulaDoDevetnaiset[1]); break;
                    case 2: Console.Write(" и " + nulaDoDevetnaiset[2]); break;
                    case 3: Console.Write(" и " + nulaDoDevetnaiset[3]); break;
                    case 4: Console.Write(" и " + nulaDoDevetnaiset[4]); break;
                    case 5: Console.Write(" и " + nulaDoDevetnaiset[5]); break;
                    case 6: Console.Write(" и " + nulaDoDevetnaiset[6]); break;
                    case 7: Console.Write(" и " + nulaDoDevetnaiset[7]); break;
                    case 8: Console.Write(" и " + nulaDoDevetnaiset[8]); break;
                    case 9: Console.Write(" и " + nulaDoDevetnaiset[9]); break;

                }
            }

            if ((secondDigit == 1))
            {
                switch (thirdDigit)
                {
                    case 0: Console.Write(" и " + nulaDoDevetnaiset[10]); break;
                    case 1: Console.Write(" и " + nulaDoDevetnaiset[11]); break;
                    case 2: Console.Write(" и " + nulaDoDevetnaiset[12]); break;
                    case 3: Console.Write(" и " + nulaDoDevetnaiset[13]); break;
                    case 4: Console.Write(" и " + nulaDoDevetnaiset[14]); break;
                    case 5: Console.Write(" и " + nulaDoDevetnaiset[15]); break;
                    case 6: Console.Write(" и " + nulaDoDevetnaiset[16]); break;
                    case 7: Console.Write(" и " + nulaDoDevetnaiset[17]); break;
                    case 8: Console.Write(" и " + nulaDoDevetnaiset[18]); break;
                    case 9: Console.Write(" и " + nulaDoDevetnaiset[19]); break;

                }

            }

            if ((secondDigit > 1) && (thirdDigit > 0))
            {
                switch (secondDigit)
                {
                    case 2: Console.Write(" " + desetitsi[1]); break;
                    case 3: Console.Write(" " + desetitsi[2]); break;
                    case 4: Console.Write(" " + desetitsi[3]); break;
                    case 5: Console.Write(" " + desetitsi[4]); break;
                    case 6: Console.Write(" " + desetitsi[5]); break;
                    case 7: Console.Write(" " + desetitsi[6]); break;
                    case 8: Console.Write(" " + desetitsi[7]); break;
                    case 9: Console.Write(" " + desetitsi[8]); break;
                }
                switch (thirdDigit)
                {
                    case 0: break;
                    case 1: Console.Write(" и " + nulaDoDevetnaiset[1]); break;
                    case 2: Console.Write(" и " + nulaDoDevetnaiset[2]); break;
                    case 3: Console.Write(" и " + nulaDoDevetnaiset[3]); break;
                    case 4: Console.Write(" и " + nulaDoDevetnaiset[4]); break;
                    case 5: Console.Write(" и " + nulaDoDevetnaiset[5]); break;
                    case 6: Console.Write(" и " + nulaDoDevetnaiset[6]); break;
                    case 7: Console.Write(" и " + nulaDoDevetnaiset[7]); break;
                    case 8: Console.Write(" и " + nulaDoDevetnaiset[8]); break;
                    case 9: Console.Write(" и " + nulaDoDevetnaiset[9]); break;
                }
            }
        }
    }
}

