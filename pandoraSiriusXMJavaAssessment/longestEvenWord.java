public static string LongestEvenLengthWord(string input)
{
string noSuccess = “00”;
if (string.IsNullOrEmpty(input) || input.Length == 1)
{
return noSuccess;
}

int count = 0, max = 0, lastIndex = 0;
for (int i = 0; i < input.Length; i++)
{
if (input[i] == ‘ ‘)
{
if (count % 2 == 0)
{
if (count > max)
{
max = count;
lastIndex = i;
}

count = 0;
}
else
{
count = 0;
}
}
else
{
count++;
}
}

if (max == 0)
{
return count % 2 == 0 ? input.Substring(input.Length – count, count) : noSuccess;
}

return input.Substring(lastIndex – max, max);
}

//

        int count = 0;
        int max = 0;
        int lastIdx = 0;

        for (int i = 0; i < sentence.length(); i++) {
            string x = sentence.charAt(i);
            if (x == " ") {
                if (count % 2 == 0) {
                    if (count > max) {
                    max = count;
                    lastIdx = i;
                    }

                    count = 0;
                } else {
                    count = 0;
                }
            } else {
                count++;
            }
        }
