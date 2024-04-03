#include <cs50.h> // = int get_string(string prompt);
#include <stdio.h> // = int printf(string format, ...);

int main(void)
{
  string name = get_string("What's your name? ");
  printf( "hello, %s  \n", name);
}