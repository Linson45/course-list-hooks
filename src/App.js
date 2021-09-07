import moment from "moment";
import { useState,useEffect } from 'react';
import React from 'react'
import { sortFunction } from "./api/sort";
import { fetchApi } from "./api";
import {useDispatch,useSelector} from 'react-redux';
import {getCourses} from './actions/postAction'
import 'antd/dist/antd.css';
import './styles/App.css'
import {
  Input,
  List,
  Avatar,
  Row,
  Col
} from "antd";
const { Search } = Input;


const  App=()=>{
  useEffect(() => {

    dispatch(getCourses())
    
  }, []);
  const courses=useSelector((state)=>state.post.posts)
  const [filterTable,setFilterTable]=useState(courses)
  const dispatch=useDispatch();
  
  function parseData(res) {
    return sortFunction(res, "Course Id");
  }
  // function fetchCourses(){
  //   //this.setState({ loading: true });

  //   fetchApi("https://nut-case.s3.amazonaws.com/coursessc.json", "get").then(
  //     (res) => {
  //       console.log("responseJson", res);
  //       setCourses(parseData(res));
  //       setFilterTable(parseData(res));
  //     }
  //   );
  // };
  function search(value){
    let { courses1 } = courses;
    const filterTable = courses.filter((o) =>
      Object.keys(o).some(
        (k) =>
          String(o["Course Name"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(o["Child Subject"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(o["Course Id"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(o["Parent Subject"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(o["Provider"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(o["Universities/Institutions"])
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(moment(o["Next Session Date"]).format("Do MMMM, YYYY"))
            .toLowerCase()
            .includes(value.toLowerCase())
      )
    );
    setFilterTable(filterTable ? filterTable : courses,)
  };



    return (
      <div>
        <Row align="center" style={{paddingBottom:"100px"}}>
        <Col lg={16} md={15} sm={10} >
        <Search
            id="SearchBox"
            placeholder="Search Courses"
            onSearch={(value) =>search(value)}
            onChange={(e) => search(e.target.value)}
            className="search-input"
            style={{marginTop: "30px"}}
          />
        </Col>
        <Col lg={12} md={15} sm={17} >
        <List
          itemLayout="vertical"
          size="small"
          className="liststyle"
          style={{marginTop: "20px"}}
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={filterTable?filterTable:courses}

          renderItem={item => (
            <List.Item
              key={item['Course Id']}
              style={{
                color: "#fff",
                background: "#00C9FF",
                background: "-webkit-linear-gradient(to right, #92FE9D, #00C9FF)",
                background: "-webkit-gradient(linear, left top, right top, from(#92FE9D), to(#00C9FF))",
                background: "-webkit-linear-gradient(left, #92FE9D, #00C9FF)",
                background: "-o-linear-gradient(left, #92FE9D, #00C9FF)",
                background: "linear-gradient(to right, #92FE9D, #00C9FF)",
                boxShadow: "0 0 40px rgba(0,0,0,0.3)",
              }}
            >
        <List.Item.Meta
          avatar={<Avatar src={"https://mernlmsassets.s3.ap-south-1.amazonaws.com/Thumbnails/mechine%20learning%20-Thumbnail.png"} />}
          title={<a href={item.Url}>{item['Course Id']}.  {item["Course Name"]}</a>}
          description={<span>
            <p>{item["Child Subject"]}</p>
            <p>{item["Universities/Institutions"]}</p>
            <p>{item["Parent Subject"]}</p>
          </span>}

        />
              
            </List.Item>
    )
  }
        />,
       
       </Col>
        </Row>

      </div >
    );
  }


export default App;
