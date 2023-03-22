import React from 'react';


const LaunchpadData =[
    {
        id:0,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:1,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:2,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:3,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:4,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:5,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:6,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
    {
        id:7,
        name:"Lorem ipsum ( LOrem )",
        dataTime:"09/12/2023 - 10:30 PM",
        progressImage:"/assets/scroll-bar-image.png",
        progressStart:"15005.5 / 9000",
        progressEnd:"9000",
        partcipitent:"4800"
    },
]

const Upcoming = () => {
  return (
    <div>
        <div className="nft-section-2" id="padmondao-section-1">
	<div className="container">
		<div className="inner-nft-section-2" id="inner-padmondao-section-1">
			<h2><span>PadmonDAo LAUNCHPAD</span></h2>
		</div>
	</div>
</div>	
<div className="padmondao-section-3">
	<div className="container">
		<div className="inner-padmondao-section-3">
			{
                LaunchpadData.map((value,index)=>{
                    return(
                        <>
                <div className="inner-pad-sec-3">
				<div className="inner-pad-sec-3-left" id="inner-pad-sec-3-right">
					<div className="inner-pad-sec-3-left-heading">
						<h2><span>{value.name}</span></h2>
					</div>
					
					<div className="inner-pad-sec-3-left-bar-area">
						<h3>{value.dataTime}</h3>
						<img src={value.progressImage} className="scroll"/>
						
						<div className="scroll-bar-area">
							<div className="scroll-bar-area-left">
								<h4>{value.progressStart}</h4>
							</div>
							
							<div className="scroll-bar-area-right">
								<h4>{value.progressEnd}<span>BUSD</span></h4>
							</div>							
							
							<div className="clear"></div>
						</div>
						
						
						<div className="scroll-bar-area-person">
							<div className="scroll-bar-area-person-left">
								<img src="/assets/person-icon.png" />
							</div>
							
							<div className="scroll-bar-area-person-right">
								<h3>{value.partcipitent}</h3>
								<h5>Participants</h5>
							</div>
							
							<div className="clear"></div>
						</div>
						
						
						
					</div>
					
					
					
					
				</div>	
			</div>
                        </>
                    )
                })
            }
			
			
		</div>
	</div>
</div>

    </div>
  )
}

export default Upcoming
