// setup

console.log("start");

var width = 360;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream

var streaming = false;

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var button = document.getElementById('button');


function startup() {
    console.log("r")
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("An error occurred: " + err);
        });


    video.addEventListener('canplay', function(ev){
        if (!streaming) {
            console.log(true)
            height = video.videoHeight / (video.videoWidth/width);
        
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
        }, false);

    }

startup();

// while (streaming === false){
//     continue;
// }

function getData() {
    console.log("Getting data")
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, width, height);    
    var img = context.getImageData(0, 0, canvas.width, canvas.height);

    };

getData();


// Correlation Coefficient

function pearsonCorrelation(independent, dependent){
    // covariance
    let independent_mean = arithmeticMean(independent);
    let dependent_mean = arithmeticMean(dependent);
    let products_mean = meanOfProducts(independent, dependent);
    let covariance = products_mean - (independent_mean * dependent_mean);

    // standard deviations of independent values
    let independent_standard_deviation = standardDeviation(independent);

    // standard deviations of dependent values
    let dependent_standard_deviation = standardDeviation(dependent);

    // Pearson Correlation Coefficient
    let rho = covariance / (independent_standard_deviation * dependent_standard_deviation);

    return rho;
}


function arithmeticMean(data){
    let total = 0;

    // note that incrementing total is done within the for loop
    for(let i = 0, l = data.length; i < l; total += data[i], i++);

    return total / data.length;
}


function meanOfProducts(data1, data2){
    let total = 0;

    // note that incrementing total is done within the for loop
    for(let i = 0, l = data1.length; i < l; total += (data1[i] * data2[i]), i++);

    return total / data1.length;
}


function standardDeviation(data){
    let squares = [];

    for(let i = 0, l = data.length; i < l; i++){
        squares[i] = Math.pow(data[i], 2);
    }

    let mean_of_squares = arithmeticMean(squares);
    let mean = arithmeticMean(data);
    let square_of_mean = Math.pow(mean, 2);
    let variance = mean_of_squares - square_of_mean;
    let std_dev = Math.sqrt(variance);

    return std_dev;
}


function getTautness(){

}


