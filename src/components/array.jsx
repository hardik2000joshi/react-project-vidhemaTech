export const CreateArray = () => {
    // const arr = [10, 20, 30, 40, 50];
    const obj = [{
        userName: "Ayush Shrivastava",
        age: 20,
    },
    {
        userName: "Aman Jain",
        age: 24,
    },
    {
        userName: "Aditya Gupta",
        age: 18,
    },
]
obj.forEach((n) => {
    console.log(n.userName);
})
console.log(obj);
    return(
        <div>
        <div>
            {obj.map((i, index) => {
                return(
                    <div key={index}>
                        <h1>
                            {i.userName} <br />
                            {i.age} <br />
                        </h1>
                    </div>
                )
            })}
        </div>
        </div>
    )
}