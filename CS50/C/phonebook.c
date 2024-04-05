#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
  string name;
  string number;
}
person;

int main (void)
{
  person people[3];

  people[0].name = "carter";
  people[0].number = "+55-11-955187525";

  people[1].name = "Renan";
  people[1].number = "+55-11-965187526";

  people[2].name = "David";
  people[2].number = "+55-11-985187528";

  string name = get_string("Name: ");
  for (int i = 0; i < 3; i++)
  {
    if (strcmp(people[i].name, name) == 0)
    {
      printf("Found %s\n", people[i].number);
      return 0;   
    }
  }
  printf("Not found\n");
  return 1;
}