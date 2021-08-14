import React from "react";
import Button from "../../Component/Button/Button";
import Input from "../../Component/Input/Input";
import { sidebarSelector } from "../../selectors/sidebar.selector";
import { useAppSelector } from "../../store";
interface Props{
}
const AccountSetting: React.FC<Props> = (props) => {

    const sidebarOpen = useAppSelector(
        sidebarSelector
      ); 

  return (
   <div className="bg-gray-300 w-screen">
    <div className={" bg-gray-300 px-3 w-full lg:px-10" +
    (sidebarOpen
      ? " transform lg:translate-x-1/4 duration-1000 lg:max-w-max "
      : "tranform lg:-translate-x-1/4 duration-1000 ") }>
    <div className=" flex flex-col my-4 lg:my-10 justify-center mx-auto p-10 border-gray-700 shadow-gray bg-white">
        <h2 className="text-lg font-semibold text-gray-700 mb-10">GENERAL INFORMATION</h2>
        <div  className="flex flex-col md:flex-col lg:flex-row lg:mx-16 text-gray-500 gap-4">
            <div className=" mb-7">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg" className=" w-36 h-36"></img>
            <span className="text-blue-700 font-semibold text-sm mt-10">Upload picture</span>
            </div>
        <div className="flex flex-col lg:mx-10">
        <div className= " flex flex-col md:flex-row lg:flex-row mb-10 gap-4">
        <div className=" flex flex-col">
        <label className="mb-5"> Full Name </label>
        <input placeholder="Name " className="border border-gray-300 shadow-inner px-2 py-2 lg:w-80 rounded-lg" ></input> </div>
        <div className="flex flex-col lg:pl-10">
            <label className="mb-5">Date of Birth</label>
        <div className="flex flex-col md:flex-row lg:flex-row gap-3 ">
         <div className="" >
            <select className=" border-2 p-2 w-full md:w-max lg:w-max" >
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                 <option>7</option>
                 <option>8</option>
                 <option>9</option>
                 <option>10</option>
                 <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                 <option>17</option>
                  <option>18</option>
                  <option>19</option>
                   <option >20</option>
                   <option>21</option>
                   <option>22</option>
                    <option>23</option>
                   <option>24</option>
                    <option>25</option>
                    <option>26</option>
                   <option>27</option>
                   <option>28</option>
                   <option>29</option>
                   <option>30</option>
             </select>
          </div>
          <div >
          <select className=" border-2 p-2 w-full md:w-max lg:w-max" >
               <option>Month</option>
               <option>Jan</option>
               <option>Feb</option>
               <option>Mar</option>
               <option>Apr</option>
               <option>May</option>
               <option>Jun</option>
               <option>Jul</option>
               <option>Aug</option>
               <option>Sep</option>
               <option>Oct</option>
               <option>Nov</option>
               <option>Dec</option>
          </select>
        </div>
                                                                            
        <div >
         <select className=" border-2 p-2 w-full md:w-max lg:w-max" >
           <option>Year</option>
           <option>2018</option>
           <option>2017</option>
           <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
             <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
             <option>1994</option>
            <option>1993</option>
             <option>1992</option>
             <option>1991</option>
             <option>1990</option>
              <option >1989</option>
              <option>1988</option>
              <option>1987</option>
             <option>1986</option>
              <option>1985</option>
              <option>1984</option>
             <option>1983</option>
            <option>1982</option>
             <option>1981</option>
             <option>1980</option>
         </select>
        </div>
        </div>
        </div>
        </div>
        <div className=" flex flex-col">
        <label className="mb-5">Profession
        <input placeholder=" Profession" className="border border-gray-300 shadow-inner px-2 py-2 w-full rounded-lg" ></input></label>
        </div>
        </div>
        </div>
        
        <div className="bg-white pt-7 lg:px-7">
        <h2 className="text-lg font-semibold text-gray-700 mb-5">About</h2>
        <div className="flex flex-col lg:mx-16">
        <label className="mb-3"> Bio </label>
        <input  className="w-full border-2 shadow-inner h-48 "></input>
        </div>
  
    </div>

    </div>
    <div className="flex justify-between mb-5">
        <Button theme="Secondary" type="button" buttonType="solidify" >Cancel</Button>
        <Button theme="Secondary" type="button" buttonType="solidify" >Save</Button>
        

    </div>
    </div>
    </div>
   
);
};

AccountSetting.defaultProps = {
}

export default AccountSetting;