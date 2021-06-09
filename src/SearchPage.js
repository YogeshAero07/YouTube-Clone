import React from "react";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniZpWilkjcTtBnLl7yoqJifc9BTCdesw-82jkQHZw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Study IQ Education"
            verified
            subs="9.8M"
            noOfVideos={24666}
            description="Study-IQ Education is an education platform trusted by millions across the globe. With over 80 million views per month and 90.."
            />  
             <hr />  

             <VideoRow 
             views="1.4M"
             subs="647K"
             description="Study-IQ Education is an education platform trusted by millions across the globe. With over 80 million views per month and 90 lakh subscribers it is the most watched education channel in the World."
             channel="Study IQ Education"
             title="Doctrine of Eclipse in Indian Constitution explained - Karnataka Judicial Service Exam 2021 KPSC J
             "
             image="https://i.ytimg.com/vi/hAjUou5Gz_M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn9OAyYQkhKFQQNprNwSnRFZRPiA"
             />  
             <VideoRow 
             views="1.4M"
             subs="647K"
             description="Study-IQ Education is an education platform trusted by millions across the globe. With over 80 million views per month and 90 lakh subscribers it is the most watched education channel in the World."
             channel="Study IQ Education"
             title="Doctrine of Eclipse in Indian Constitution explained - Karnataka Judicial Service Exam 2021 KPSC J
             "
             image="https://i.ytimg.com/vi/hAjUou5Gz_M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn9OAyYQkhKFQQNprNwSnRFZRPiA"
             /> 
             <VideoRow 
             views="1.4M"
             subs="647K"
             description="Study-IQ Education is an education platform trusted by millions across the globe. With over 80 million views per month and 90 lakh subscribers it is the most watched education channel in the World."
             channel="Study IQ Education"
             title="Doctrine of Eclipse in Indian Constitution explained - Karnataka Judicial Service Exam 2021 KPSC J
             "
             image="https://i.ytimg.com/vi/hAjUou5Gz_M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn9OAyYQkhKFQQNprNwSnRFZRPiA"
             /> 
             y<VideoRow 
             views="1.4M"
             subs="647K"
             description="Study-IQ Education is an education platform trusted by millions across the globe. With over 80 million views per month and 90 lakh subscribers it is the most watched education channel in the World."
             channel="Study IQ Education"
             title="Doctrine of Eclipse in Indian Constitution explained - Karnataka Judicial Service Exam 2021 KPSC J
             "
             image="https://i.ytimg.com/vi/hAjUou5Gz_M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn9OAyYQkhKFQQNprNwSnRFZRPiA"
             />       
        </div>
    )
}

export default SearchPage;
