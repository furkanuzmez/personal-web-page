# EEG, Machine Learning and BCI
### Introduction (will be expand) 

In this post, there will be explanations of keywords about the subject which is EEG(electroencephalogram) and BCI(brain-computer interface).

All the `unknown terms` will be listed as randomly because I will write the explanations of term one by one when I saw one in an article.

 ### Unknown Terms in the Paper for me
 
-  Sensorimotor(SMR)
The **sensorimotor rhythm** (SMR) is a brain wave. It is an oscillatory idle **rhythm** of synchronized electric brain activity. It appears in spindles in recordings of EEG, MEG, and ECoG over the **sensorimotor**cortex. For most individuals, the frequency of the SMR is in the range of 13 to 15 Hz.

- Motor-Imagery(MI) ?
- Extreme Learning Machine?
- Event-related Desynchronization(ERD)?

# Paper Examinations and Summaries
##  1- Multi-kernel extreme learning machine for EEG classification in brain-computer interfaces - 2017
 ### Authors
 Yu Zhang, Yu Wang, Guoxu Zhou, Jing Jin, Bei Wang, Xingyu Wang, Andrzej Cichocki

 ### Motivation and brief overview (from Abstract)
 - Goal: Designing a powerful EEG data classifier with strong  generalization capability for the development of a motor-imagery based brain-computer interface(BCI) using extreme learning machine. 
 - Proposed Solution: A multi kernel extreme learning machine (ELM)(MKELM) based for motor-imagery electroencephalogram(EEG) classification. 
 
 ### Previous methods (Intro) & their limitations

 - Linear Discriminant Analysis(LDA) works for pattern classification if the sample covariance matrices are similar among different classes. But ERD classification with LDA can cause overfitting.
- Common spatial pattern(CSP) and SVM when they are used together, it becomes one of the most popular classifier for EEG data. Common spatial pattern is effective method for feature extraction in classifying two classes of motor imagery EEG data and SVM has good generalization capability with adopted soft margin.
- Effectiveness of Bayesian ELM is validated for EEG classification. However, the randomly assigned node parameters generally result in a large variation in classification accuracy for different runnings with the same number of hiddden nodes.

 ### Proposed Solution
  - ELM has recently proven to be comparable or better than support vector machine(SVM) for  pattern matching. 
  - Instead of using a single kernel, ELM with multi kernel has recently arisen. SVM classification preceeded by CSP feature extraction is applied again and ELM also added as an extension layer to optimize the success.
  - Gaussian kernel and polynomial kernel are exploited to map the original CSP features to different nonlinear feature spaces.Accordingly, by integrating both kernels, using a multi-kernel learning strategy to achieve more robust classification of EEG in MI tasks.
  
 ### Discoveries
 -  Using the multi-kernel extreme learning machine with both integrating gaussian kernel and polynomial kernel to take better results. The two nonlinear feature provide richer discriminant information that may be supplementary to each other. 
 
 ### Discussion/Conclusion (their own limitations & future work)
 - To take better results from MKEML, between two kernels there must be good balance. (Polynomial kernel and Gaussian kernel)
 - Determining the number of hidden nodes for a specific application. (Time consuming)
 - Future work: Investigating the finding a better kernel balance parameter.
 ### Reflection on how to adress the limitations of the paper (my ideas )
 - I could not see any limitations in the paper with my current knowlodge.
 
 ### Datasets (Result)
 http://www.bbci.de/competition/iii/
 
 ### Comparison/benchmark methods (Results section)
 - EEG data of each trial were band-pass filtered between 4–40 Hz that covered most ERD features re-lated to MI. Features were then extracted by CSP with parameter M =1.
 - Compared with this algorithms MLP, SVM, GKSVM, PKSVM, ELM, GKELM, PKELM and accuracy of algorithms showwd in table. **MKELM has the best accuracy among each subject.**
 ### Code
 Code implementation could not be found though algorithm explained in the paper.

##  2- Deep Learning Human Mind for Automated Visual Classification
### Authors
C. Spampinato, S. Palazzo, I. Kavasidis, D. Giordano
### Motivation and brief overview (from Abstract)
- First EEG data combined with Recurrent Neural Networks (RNN) to learn an discriminative brain activity manifold of visual categories in a reading the mind effort. After that, learned capabilities are transferred to machines by training a Convolutional Neural Network(CNN) based regressor to project images onto the learned manifold.
### Previous methods (Intro) & their limitations
- Previous works are not satisfying for which parts of visual cortex and brain are responsible for such cognitive processes because of the difficulties of cognition-based methods to perform visual tasks.
### Proposed Solution

- A deep learning approach to classify EEG data evoked by visual object stimuli outperforming state-of-the-art methods both in the number of tackled object classes and in classification accuracy.
- The first computer vision approach driven by brain signals, the first automated classification approach employing visual descriptors extracted directly from human neural processes involved in visual scene analysis.

### Discoveries
- Convolutional Neural Network trained with human eeg feature representation.
### Discussion/Conclusion (their own limitations & future work)
- Their own limitations are not mentioned clearly.
- Future work is developing more complex deep learning approaches and interpretong the EEG-learned features in order to identify brain activation areas.
### Reflection on how to adress the limitations of the paper (my ideas )
 - I could not see any limitations in the paper with my current knowlodge.
### Datasets (Result)
- Dataset was created by themselves and publicly released but I could find it yet. 40 image classes taken by ImageNet and used for stimulating the brain. EEG signals are recorded by device with 128 channel.
### Comparison/benchmark methods (Results section)
Performance analysis divided in  three steps and they are at the below.
- learning visual stimuli–evoked EEG data using RNN
- CNN-based regression to map images to RNN-learned EEG-based features
- the combination of the above two steps to implement automated visual classifiers.
- Their approach is compared with GoogleNet and VGG and it results better than VGG and almost same with the GoogleNet.

### Code
- Code is not shared.

##  3- An end-to-end deep learning approach to MI-EEG signal classification for BCIs
### Authors
Hauke Dose , Jakob S. Møller, Helle K. Iversen , Sadasivan Puthusserypada
### Motivation and brief overview (from Abstract)
- Developing a Deep Learning approach for EEG based MI-BCI system could potentially be used the improve current stroke rehabilitation strategies.
### Previous methods (Intro) & their limitations
- In this paper it is also mentioned that CSP and SVM most used algorithms for EEG classification but there writes also there is a previous work which MLP(multi-layer-perceptron) can be used with CSP instead of SVM. 
### Proposed Solution
- CNN layers is used for learning generalization featuers and dimension reduction while a conventional Fully Connected(FC) layer is used for classification. Both togeher can be applied to the raw eeg signals.
### Discoveries
- This study has also shown that the predictor draws most relevant information from the beginning and the end of the imagined movement rather than the period in between. (quotation from the paper)
### Discussion/Conclusion (their own limitations & future work)
- This algorithm gives the best accuracy among all of them but competitors algorithm does not represent the current state of research in this area but accuracy is close to the %80 and coud be count as a success. 
- Deep learning need more data samples than other machine learning algorithms like SVM. It is one of the limitation.
- **Future Work** A recurrent or other further developed models may be constructed in a way so it can use the presence of a probable movement onset to increase its prediction certainty for the following part of the recording as the movement type never changes abruptly in the given experimental paradigm.(quotation from the paper)

### Reflection on how to adress the limitations of the paper (my ideas )
-   I could not see any limitations in the paper with my current knowlodge.
### Datasets (Result)
-  The selected global classifier reached 80.38%, 69.82%, and 58.58% mean accuracies for datasets with two, three, and four classes, respectively, validated using 5-fold crossvalidation. As a novel approach in this context, transfer learning was used to adapt the global classifier to single individuals improving the overall mean accuracy to 86.49%, 79.25%, and 68.51%, respectively. The global models were trained on 3s segments of EEG data from different subjects than they were tested on, which proved the generalization performance of the model.
### Comparison/benchmark methods (Results section)
- This algorithm compared with other 5 algorithms which do not represent the state-of-art. Proposed algorithm outcomes all of them and gives the best accuracy among them. 
Compared algorithms are listed at the below
- Park, Took, and Mandic (2014b) - SUT-CCSP SVM
- Handiru and Prasad (2016) - FB-CSP SVM classifier
- Kim et al. (2016b) - SUT-CCSP Random forest
- Loboda et al. (2014) - Phase information
- Tolic and Jovic (2013) - Wavelet transform DNN
### Code
- Code is not shared.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMzg3NjcwMDcsLTY2Mzg2MzkwMCwtMT
Q5OTc3MjYzNCwtMTA2OTIxNjQ2NywxMjc2MDAxMDM4LDE4Nzc5
MzIzNzMsLTE2MjkzMjQ1ODAsMTI4MDQ3Mjk2OSwxNzY3OTQ3Nj
k2LDEwMzgxODU0OTMsMTM0ODk5NTYzOSwtMTkyOTQ4OTU1LC0x
NTkzNTU2OTU5LC0zOTE3Mjk1MTIsLTE4Mjc0ODM2OTIsMTk0MT
g1NjM3Miw0ODk1NTk3NjksLTE0NTMyNjI1ODEsLTkyMDI3NDI5
MCwxNjUwMDI1OTM0XX0=
-->