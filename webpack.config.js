module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:{
                    loader:'ts-loader'
                }
            },
            {    
                test: /\.css$/i,  
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devtool:true,
    devtool: 'inline-source-map',
    resolve: {
        extensions:['.ts','.js']
    }
}