<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet [<!ENTITY nbsp "&#160;">]>
<xsl:stylesheet version="1.0" xmlns:simplefeed="http://api.simplefeed.com/rss/ext/1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">

<xsl:output method="html"/>
<xsl:template match="/rss">

<html>

<head>
   <title><xsl:value-of select="channel/title"/></title>
   <link rel="stylesheet" type="text/css" href="rss/screen.css"> 
      <xsl:attribute name="rel">alternate</xsl:attribute>
      <xsl:attribute name="href"><xsl:value-of select="channel/linkNode"/></xsl:attribute>
      <xsl:attribute name="type">application/rss+xml</xsl:attribute>
      <xsl:attribute name="title"><xsl:value-of select="channel/title"/></xsl:attribute>
   </link>
   <xsl:element name="link">
   <xsl:attribute name="type">text/css</xsl:attribute>
   <xsl:attribute name="href">http://rss.mckinseyquarterly.com/x/css/screen.css</xsl:attribute>
   <xsl:attribute name="rel">stylesheet</xsl:attribute>
   <xsl:attribute name="media">screen</xsl:attribute>
   <xsl:attribute name="title">Default Stylesheet</xsl:attribute>
</xsl:element>
<xsl:element name="style">
   <xsl:attribute name="type">text/css</xsl:attribute>
   .SF_RSS_HIDEINBROWSERLIST { display: none; }
</xsl:element>
<xsl:element name="script">
   <xsl:attribute name="type">text/javascript</xsl:attribute>
   <xsl:attribute name="src">http://rss.mckinseyquarterly.com/x/stylesheet.js</xsl:attribute>
</xsl:element>
<xsl:element name="script">
   <xsl:attribute name="type">text/javascript</xsl:attribute>
   <xsl:attribute name="src">http://rss.mckinseyquarterly.com/x/pkg/jquery.js</xsl:attribute>
</xsl:element>
<xsl:element name="script">
   <xsl:attribute name="type">text/javascript</xsl:attribute>
   
      var feedUrl="<xsl:value-of select="channel/atom:link/@href"/>";
      var subscriptionCode="<xsl:value-of select="simplefeed:subscription"/>";
   <![CDATA[
            $(document).ready(function() {
            $("a.SF_RSS_feed_url").each(function() {
                  $(this).attr("href", feedUrl);
                  $(this).text(feedUrl);
               });
            $("span.SF_RSS_feed_url").each(function() {
                  $(this).text(feedUrl);
               });
            $("div.SF_RSS_desktopsub a").each(function() {
                  $(this).attr("href", "feed:"+feedUrl);
               });
            $("a.SF_RSS_desktopsub_sharpreader").each(function() {
                  $(this).attr("href", "http://127.0.0.1:5335/system/pages/subscriptions?url="+feedUrl);
               });
            $("a.SF_RSS_desktopsub_usm").each(function() {
                  $(this).attr("href", feedUrl+"?f=usm_rss");
               });
            $("div.SF_RSS_autosub a").each(function() {
                  var ascode=$(this).attr("href");
                  $(this).attr("href", "http://rss.mckinseyquarterly.com/as?as="+ascode+"&s="+subscriptionCode);
               });

            $("a.MKQ_Popup").click(function() {
                window.open($(this).attr("href"), "_MKQ_Popup", "status=0,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=1,width=740,height=550");
                return false;
            });
            $(".SF_RSS_itemList a").each(function() {
               $(this).attr("target","_parent");
            });
         });
      $(document).ready(function() {
            $("div.SF_RSS_subscription_legacy").show();
            $("div.SF_RSS_subscription").show();
            go_decoding();
            $(".SF_RSS_itemList").show();
         });
   ]]>
</xsl:element>

</head>

<body class="yourFeed">
<div id="cometestme" style="display:none;">
   <xsl:text disable-output-escaping="yes">&amp;amp;</xsl:text>
</div>



      <div class="content">
      <div class="contentHead SF_RSS_subscription" style="display: none;">
        <div  class="rssHeader">
          <h3>
          Your McKinsey RSS Feed</h3>		  
        </div>
         <div class="section about">
            <div class="section thanks">
   <h3>Thank you for creating a <em>McKinsey Quarterly</em> Feed</h3>
                 <p>
                  Here is a custom <acronym title="Uniform Resource Locator">URL</acronym> for viewing your feed in a Web browser:<br />
                  <a name="escaped" target="_parent" href="/Insights/rss.aspx"><xsl:value-of select="channel/linkNode"/></a>
               </p>
            </div>   <!-- /.thanks -->

         </div>   <!-- /.about -->
      </div>   <!-- ./contentHead -->

   
      <div class="contentBody">
         <div  class="rssSubHeader">Current Feed Items</div>
         <p>The articles below come from your current McKinsey Insights &amp; Publications RSS Feed.</p>

<ul class="articleList SF_RSS_itemList">
   <xsl:for-each select="channel/item">
      <li class="article clearfix">
         <div style="color: #cc6633; font-size: 12px; height: 30px;">
         <xsl:element name="a">
            <xsl:attribute name="href"><xsl:value-of select="link" disable-output-escaping="yes"/></xsl:attribute>
            <xsl:attribute name="name">escaped</xsl:attribute>
            <xsl:value-of select="title" disable-output-escaping="yes"/>
			
         </xsl:element>
		 <p>
		<xsl:value-of select="pubDate"/></p>
         </div>
		 <div style="heigth: 30px;">&#160;</div>
		 
         <div name="escaped">
         <xsl:value-of select="content:encoded" disable-output-escaping="yes"/>
         </div>	
		
		 <p>
	  <xsl:value-of select="description"/>
	  </p>
         <div style="heigth: 30px;">&#160;</div>
      </li>
	  
   </xsl:for-each>
</ul>


         
      </div>   <!-- /.contentBody -->     
     
   </div>   <!-- /.content -->
</body>

</html>

</xsl:template>
</xsl:stylesheet>


