const style = `

.dumi-default-doc-layout > main {
    max-width: 100% !important
}
.dumi-default-header-content {
    max-width: 100% !important
}

.dumi-default-header-left{
    width: 260px !important
}
.dumi-default-sidebar{
    width: 260px !important
}

.dumi-default-sidebar > dl > dd > a{
    font-size: 14px !important;
    line-height: 40px !important;
    padding-left: 14px
}
.dumi-default-sidebar > dl > dd > a.active{
    background-color: #e6f4ff
}

.dumi-default-doc-layout-toc-wrapper > h4 {
    display: none
}

.dumi-default-table-content > table > tbody > tr > td:nth-child(1){
    width: 150px
}
.dumi-default-table-content > table > tbody > tr > td:nth-child(4){
    width: 120px
}
`;

export default style;
