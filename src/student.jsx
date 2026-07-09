const Student = () => {
    let abc = [10, 20, 30, 40, 50];
     abc.forEach((i)=> {
        console.log(i);
    })
    let pr = {
        name: "Ayush",
        age: 32,
        gender: "Male",
        place: "London",
        isEligibleToVote: true,
    }
    return(
        <>
       <h1>
        Numbers list is: {abc}
       </h1> 
       <p>
        Student lived with his parents in {pr.place} and he is of age{pr.age}, {pr.gender}
       </p>
       </>
    )
}
export default Student;