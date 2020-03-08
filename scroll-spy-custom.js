<script>

  let future = document.getElementById("afuture");
  let past = document.getElementById("past");
  let leihgabe = document.getElementById("leihgabe");
  let breadcrumb = UIkit.slider('#mobile-breadcrumb');

  console.log(breadcrumb);
  
  let pastRect = past.getBoundingClientRect();
  let pastOffset = past.offsetTop - 200;
  
  let futureRect = future.getBoundingClientRect();
  let futureOffset = future.offsetTop;
  futureOffset -= 200;
 
  window.addEventListener('scroll', function() {
    
    let distanceScrolled = window.scrollY;
    
    console.log('distanceScrolled: ' + distanceScrolled);
    console.log('futureOffset: ' + futureOffset);
    console.log('_____________');
    
    let totalOffsetPast = distanceScrolled + pastOffset;
    let totalOffsetFuture = distanceScrolled + futureOffset;
    
    if(distanceScrolled < futureOffset && distanceScrolled > 0){
      console.log("NOW");
    }
    
    if(distanceScrolled > futureOffset && distanceScrolled < pastOffset){
      console.log("Future");
    }
    
    if(distanceScrolled > futureOffset && distanceScrolled > pastOffset){
      console.log("PAST");
    }
    
  });
 
 
</script>
