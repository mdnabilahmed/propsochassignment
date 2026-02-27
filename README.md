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

desktop's LCP is 0.9s and mobile's LCP is 3.5s why is there such a big difference so for that i ran 

TBT is 4370ms on mobile and 750ms on desktop why is there such a big difference 