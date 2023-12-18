
//here props are DESTRUCTURED 
function total({nums})
{
    let addition = 0
    //let nums = props.nums
    for(let i=0;i<nums.length;i++)
    { addition+=nums[i]}
    
    return(
        <p> total = {addition}</p>
    )

}

export default total