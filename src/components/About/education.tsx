export default function Education(){
    return(
        <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-6">
            <h1 className="text-2xl md:text-4xl text-highlight mb-8 text-center">
                Education
            </h1>
            <div className="flex flex-col">
                <ol className="relative border-l-4 border-highlight/60">
                    <li className="mb-10 ml-6">
                        <div className="absolute w-4 h-4 bg-highlight rounded-full -left-2.5 border-4 border-bg-muted"></div>
                        <h3 className="text-lg md:text-xl font-semibold text-highlight">Schooling</h3>
                        <p className="text-base md:text-lg text-text">Govt. Sr. Sec. Model School Sunder Nagar</p>
                        <ul className="list-disc ml-5 mt-2 text-sm md:text-lg text-text-muted">
                            <li>Class 10th Percentage: <span className="font-medium text-accent">91.6%</span></li>
                            <li>Class 12th Percentage: <span className="font-medium text-accent">78.1%</span></li>
                        </ul>
                    </li>
                    <li className="mb-10 ml-6">
                        <div className="absolute w-4 h-4 bg-highlight rounded-full -left-2.5 border-4 border-bg-muted"></div>
                        <h3 className="text-lg md:text-xl font-semibold text-highlight">B.Tech Computer Science Engineering</h3>
                        <p className="text-base md:text-lg text-text">ICFAI University, Baddi, Himachal Pradesh</p>
                        <ul className="list-disc ml-5 mt-2 text-sm md:text-lg text-text-muted">
                            <li>Currently in 3rd year (5th semester)</li>
                            <li>Current CGPA: <span className="font-medium text-accent">8.9/10</span></li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    )
}