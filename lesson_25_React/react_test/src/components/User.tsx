type Props = {
    firstName: string,
    lastName: string,
    age: number
    showAge: boolean // Добавляем новый prop
};

function User({ firstName, lastName, age, showAge }: Props) {
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            {
                showAge
                    ? <p>Age: {age}</p>
                    : ""
            }

        </div>
    )
}
export default User;