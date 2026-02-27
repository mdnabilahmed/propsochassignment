My implementation URL :- https://propsochassignment.vercel.app/


Orignal Website --------------

Mobile Audit

 Category        Score 
 --------------  ----- 
 Performance     57    
 Accessibility   71    
 Best Practices  50    
 SEO             100   

Performance Metrics (Mobile)


 Metric                          Value    
 ------------------------------  -------- 
 First Contentful Paint (FCP)    2.6 s    
 Largest Contentful Paint (LCP)  3.5 s    
 Total Blocking Time (TBT)       4,370 ms 
 Speed Index                     3.6 s    
 Cumulative Layout Shift (CLS)   0       


Desktop Audit

 Category        Score 
 --------------  ----- 
 Performance     72    
 Accessibility   77    
 Best Practices  54    
 SEO             100   


Performance Metrics (Desktop)

 Metric                          Value  
 ------------------------------  ------ 
 First Contentful Paint (FCP)    0.7 s  
 Largest Contentful Paint (LCP)  0.9 s  
 Total Blocking Time (TBT)       750 ms 
 Speed Index                     1.2 s  
 Cumulative Layout Shift (CLS)   0.017  



one thing i notice every time i run lighthouse it gives different results and why, Lighthouse is a simulated performance test not a static measurement. Each run recreates loading conditions again and many variables change.


what i noticed 
``
desktop's LCP is 0.9s and mobile's LCP is 3.5s why is there such a big difference so for that i ran 

``
``
TBT is 4370ms on mobile and 750ms on desktop why is there such a big difference 
``

``
FCP is 2.6s on mobile and 0.7s on desktop why is there such a big difference 
``

``
Speed Index is 3.6s on mobile and 1.2s on desktop why is there such a big difference 

cause - 
blocking CSS
fonts loading late
``


what slows the website most is 
TBT - interaction delay
LCP - main content load delay
FCP - first visible thing appears on the screen
Speed Index - how fast does the page fill visually
CLS - measures how much the page MOVES unexpectedly while loading



My Implementation -----------




Mobile Audit

 Category        Score
 --------------  -----
 Performance     73
 Accessibility   89
 Best Practices  77
 SEO             82

 Performance Metrics (Mobile)

 Metric                          Value
 ------------------------------  --------
 First Contentful Paint (FCP)    1.2 s
 Largest Contentful Paint (LCP)  1.7 s
 Total Blocking Time (TBT)       1,630 ms
 Speed Index                     1.2 s
 Cumulative Layout Shift (CLS)   0

Desktop Audit

 Category        Score
 --------------  -----
 Performance     94
 Accessibility   89
 Best Practices  81
 SEO             82

 Performance Metrics

  Metric                          Value
 ------------------------------  ------
 First Contentful Paint (FCP)    0.3 s
 Largest Contentful Paint (LCP)  0.5 s
 Total Blocking Time (TBT)       200 ms
 Speed Index                     0.4 s
 Cumulative Layout Shift (CLS)   0



* what i tried to solve with my method potentially is somehting like this :- 
Load

UI renders early

JS work smaller

Browser free sooner

Interaction available early

with fewer dependencies and less third-party scripts like libreries and all result lower TBT

* simpler DOM structure going with something like this
div > div > div > section > wrapper > container >

with cleaner structure and simpler layout result Result better FCP , speed Index.


observation
one thing i can say that my implementation has less code to render so thats why i got better results than the original website.