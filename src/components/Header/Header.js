import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-75">
        <div className="hero-content text-center">
          <div className="max-w-md bill-text">
            <h1 className="text-2xl text-m-3xl font-bold">বিল কত আসবে আমার?</h1>
            <p className="py-2 emphasize">
              এই প্রশ্ন আমাকে আমার পরিচিতরা করে আসছেন যখনই তাঁরা কোন নতুন
              বৈদ্যুতিক যন্ত্রপাতি কেনেন। তাঁদের এবং তারচেয়ে বেশি আমার সুবিধার
              কথা ভেবে এই সামান্য প্রয়াস।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
