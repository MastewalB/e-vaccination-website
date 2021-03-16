var vaccinesList= [
    {
       vaccine_name
: "Hepatitis B",
       "minimum_age_prescription": "1",
     active:"false",  description: " Hepatitis B is a serious disease caused by a virus that attacks the liver \\nThe virus is called hepatitis B virus (HBV) and it  can cause lifelong infection such as cirrhosis (scarring) of the liver and \\nliver cancer and liver failure and death. Hepatitis B vaccine is \\navailable for all age groups to prevent HBV infection."
   },
    {
       vaccine_name
: "Rotavirus",
       min_age: "1",
     active:"true",  description: "Rotavirus spreads easily among infants and young children. The virus can cause severe watery diarrhea, vomiting, fever, and abdominal pain. Children who get rotavirus disease can become dehydrated and may need to be hospitalized."
   },
    {
       vaccine_name
: "Rotavirus",
       min_age: "4",
     active:"true",  description: "Rotavirus spreads easily among infants and young children. The virus can cause severe watery diarrhea, vomiting, fever, and abdominal pain. Children who get rotavirus disease can become dehydrated and may need to be hospitalized."
   },
    {
       vaccine_name
: "Pneumococcal (PCV)",
       min_age: "4",
     active:"true",  description: "Pneumococcal conjugate vaccine (PCV) is a pneumococcal vaccine and a conjugate vaccine used to protect infants, young children, and adults against disease caused by the bacterium Streptococcus pneumoniae (pneumococcus). "
   },
    {
       vaccine_name
: "Influenza",
       min_age: "6",
     active:"false",  description: "Influenza vaccines, also known as flu shots or flu jabs, are vaccines that protect against infection by influenza viruses. New versions of the vaccines are developed twice a year, as the influenza virus rapidly changes. While their effectiveness varies from year to year, most provide modest to high protection against influenza"
   },
    {
       vaccine_name
: "Rotavirus (RV)",
       min_age: "6",
     active:"true",  description: "Rotavirus spreads easily among infants and young children. The virus can cause severe watery diarrhea, vomiting, fever, and abdominal pain. Children who get rotavirus disease can become dehydrated and may need to be hospitalized."
   },
    {
       vaccine_name
: "Measles",
       min_age: "16",
     active:"false",  description: "Measles vaccine protects against becoming infected with measles.Nearly all of those who do not develop immunity after a single dose develop it after a second dose."
   },
    {
       vaccine_name
: "Hepatitus A",
       min_age: "16",
     active:"false",  description: "Hepatitis A vaccine is a vaccine that prevents hepatitis A. It is effective in around 95% of cases and lasts for at least fifteen years and possibly a person's entire life"
   },  
    {
       vaccine_name
: "Hepatitus B",
       min_age: "16",
     active:"false",  description: " Hepatitis B is a serious disease caused by a virus that attacks the liver \\nThe virus is called hepatitis B virus (HBV) and it  can cause lifelong infection such as cirrhosis (scarring) of the liver and \\nliver cancer and liver failure and death. Hepatitis B vaccine is \\navailable for all age groups to prevent HBV infection."
   },
    {
       vaccine_name
: "Pneumococcal (PCV)",
       min_age: "16",
     active:"false",  
     description: "Pneumococcal conjugate vaccine (PCV) is a pneumococcal vaccine and a conjugate vaccine used to protect infants, young children, and adults against disease caused by the bacterium Streptococcus pneumoniae (pneumococcus). "
   },
    {
       vaccine_name
: "Polio",
       min_age: "60",
     active:"false",  
     description: "Polio vaccines are vaccines used to prevent poliomyelitis (polio).//nTwo types are used: an inactivated poliovirus given by injection (IPV) //nand a weakened poliovirus given by mouth (OPV)"
   },
    {
       vaccine_name
: "Chickenpox",
       min_age: "20",
     active:"true",  
     description: "The chickenpox vaccine is a shot that can protect nearly anyone who receives the vaccine from catching chickenpox. It's also called the varicella vaccine, because chickenpox is caused by the varicella-zoster virus. The vaccine is made from a live but weakened, or attenuated, virus."
   },
   {
       vaccine_name
: "Meningococcal conjugate",
       min_age: "22",
     active:"true",  
     description: "Vaccines can help prevent meningococcal disease, which is any type of illness caused by Neisseria meningitidis bacteria.All 11 to 12 year olds should get a meningococcal conjugate vaccine, with a booster dose at 16 years old. Teens and young adults (16 through 23 year olds) also may get a serogroup B meningococcal vaccine."
   },
    {
       vaccine_name
: "Tdap",
       min_age: "16",
     active:"true",  
     description: "Tdap vaccine can prevent tetanus, diphtheria, and pertussis. Tdap is only for children 7 years and older, adolescents, and adults. Tdap may be given at the same time as other vaccines."
   },
    {
       vaccine_name
: "HPV Vaccine",
       min_age: "24",
     active:"true", 
     description: "Various strains of HPV spread through sexual contact and are associated with most cases of cervical cancer. Gardasil 9 is an HPV vaccine approved by the U.S. Food and Drug Administration and can be used for both girls and boys."
   },
    {
       vaccine_name
: "zoster",
       min_age: "19",
     active:"true",  
     description: "A zoster vaccine is a vaccine that reduces the incidence of herpes zoster (shingles), a viral disease that provokes a painful rash with blisters."
   },
    {
       vaccine_name
: "Pneumococcal vaccines",
       min_age: "72",
     active:"false",  
     description: "Pneumococcal conjugate vaccine (PCV) is a pneumococcal vaccine and a conjugate vaccine used to protect infants, young children, and adults against disease caused by the bacterium Streptococcus pneumoniae (pneumococcus). "
   }
]

dbv.vaccines.bulkPut(vaccinesList).then(function(lastKey) {
    console.log("Done putting 100,000 raindrops all over the place");
    console.log("Last raindrop's id was: " + lastKey); // Will be 100000.
}).catch(Dexie.BulkError, function (e) {
    // Explicitely catching the bulkAdd() operation makes those successful
    // additions commit despite that there were errors.
    console.error ("Some raindrops did not succeed. However, " +
       100000-e.failures.length + " raindrops was added successfully");
})