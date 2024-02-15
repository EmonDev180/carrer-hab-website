import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    console.log(job);

    const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information} = job
    return (
 
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
                        <h2 className="flex"><CiDollar className="text-2xl"></CiDollar> {salary}</h2>
                    </div>
                    <div className="card-actions">
                       <Link to={`/job/${id}`}>
                             <button className="btn btn-primary">View Details</button>
                       </Link>
                    </div>
                </div>
            </div>
        
    );


};

Job.propTypes={

    job:PropTypes.array
 };

export default Job;