---
layout: algorithm
title: KNN
---
<h1> K-Nearest-Neighbour </h1>

<h2>The K-nearest-neighbour algorithm </h2>

<p>This module is an implementation of the K-nearest neighbours (kNN) machine learning algorithm for classification. In this designed kNN model, the input signals were the original EEG signal without normalization. </p>
<p>A kNN algorithm classifies and object based on its neighbours. An object is assigned to the class most common to k numbers of its nearest neighbours. For example if k is 3, the object is assigned to the class that is most common to 3 of its neighbours with smallest Euclidean distance to the object.  </p>
<p> When running the algorithm with data set (with proper subject name and channel number), the algorithm will print on the console
    
   <ul>
   <li> Current training error </li>
   <li> Current test error </li>
   </ul>
    
  And saves a 2D scatter plot of the result in a png file </p>

<h2>Implementation </h2>
<p> The classifier can be called using the <code> EEG_knn </code> module in the classifiers directory. </p>
<p>When the module is called, it will first load data with specified features using <code> EEG_feature_extraction.generate_feature_data </code>.</p>

 <span style="color:red"> <code> dataset = EEG_feature_extraction.generate_feature_data("s16",20)</code>
  <p> 📌There are no parameters for this module. Users will need to edit the arguments for the code above to specify the data to be loaded </p>
   
   
   
 <p> The implementation of the kNN classifier is under the tools directory called <code> knn.py </code>. <code>EEG_knn </code> calls the methods and pass the processed data to <code>tools.knn</code>. This calculates the training and test error.</p>

<p>Finally, the module calls utils.plot_2dclassifier to plot the results of the kNN classifier. </p>
   
   <p> 📌 Currently, the plot is saved under the name "s16-c20-mean.png" as this is the default example for the demo code. Users can change the figure name and also the path for where to save the plot.</p>




<h2>Try Running the Code! </h2>
<script type="text/x-thebe-config">
  {
    requestKernel: true,
    binderOptions: {
      repo: "binder-examples/requirements",
    },
  }
</script>
<script src="https://unpkg.com/thebelab@0.3.3/lib/index.js"></script>


<pre data-executable="true" data-language="python">print("code will be placed here!")</pre>
<p>It is static for now. You can activate Thebelab by pressing the button below.
This will ask <a class="reference external" href="https://mybinder.org">mybinder.org</a> for a Python kernel, and
turn the code cell into an interactive one with outputs!</p>
<p>Try clicking the button. The cell will be come active!</p>
<button id="activateButton" style="width: 120px; height: 40px; font-size: 1.5em;">Activate</button>

<script>
var bootstrapThebe = function() {
    thebelab.bootstrap();
}
document.querySelector("#activateButton").addEventListener('click', bootstrapThebe)
</script>