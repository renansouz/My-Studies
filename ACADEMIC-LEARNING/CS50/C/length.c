#include <cs50.h>
#include <stdio.h>
#include <string.h>

// int string_length(string s);

int main(void)
{
  string name = get_string("Name: ");
  int length = strlen(name);
  printf("%i \n", length)
}

// int string_length(string s)
// {
//   int n = 0;
//   while (s[n] != '\0')
//   {
//     n++
//   }
//   return n;
// }