import React from 'react';

const Developer = (props) => {
    const { name, img, age, country, role, salary } = props.developer
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="img-fluid rounded" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Age: {age}</h6>
                        <h6>Country: {country}</h6>
                        <h6>Skill: {role}</h6>
                        <h6>salary: ${salary}</h6>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-dark w-50 ">Hire</button>
                        <i class="fab fa-github-square fs-1"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;