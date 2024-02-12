type Props = {
    firstName: string;
    lastName: string;
    assessments: number[];
};


function Students({ firstName, lastName, assessments }: Props) {
    const sum: number = assessments.reduce((acc, val) => acc + val / assessments.length);
    const sumFix: number = +sum.toFixed(2);
    return (
        <div>
            <p>{firstName} {lastName}</p>
            <p>{sumFix}</p>
        </div>
    );
}


export default Students;