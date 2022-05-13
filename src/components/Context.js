import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        category: "basic",
        _id: "1",
        title: "Jute Bag",
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQB_4HV7c65MNqtA1LJLpdeibc9wWrYS1kHwhz_CM3Yvjw1WRAptQGCEVnQs2m3Ki6Bio8_oDvILuCAm5fR9MK9SwrXM2DkPKtFRdeUilYL&usqp=CAE",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 23,

        count: 1,
      },
      {
        _id: "2",
        title: "Khadi",
        src: "https://img.etimg.com/thumb/msid-79740598,width-300,imgsize-235669,,resizemode-4,quality-100/gettyimages-511945164.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Pickles",
        src: "https://www.saggecovillage.earth/wp-content/uploads/2021/02/products-about.png",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Pottery",
        src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201612/art-647_120716051516.jpg?size=770:433",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Traditional Dresses ",
        src: "https://static.toiimg.com/photo/69039939/1.jpg?width=748&resize=4",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Cloth Fans",
        src: "https://editorial01.shutterstock.com/wm-preview-1500/10758791c/5989dcb4/handmade-fans-sadullapur-bangladesh-shutterstock-editorial-10758791c.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "7",
        title: "Bamboo Handicrafts",
        src: "https://www.holidify.com/images/cmsuploads/compressed/800px-Handicrafts_20200701133820.JPG",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "8",
        title: "Pots",
        src: "https://thumbs.dreamstime.com/z/products-earthenware-vases-pots-pottery-village-ceramic-many-items-made-clay-beautiful-protect-68091345.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        category: "basic",
        _id: "9",
        title: "Jute Bag",
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQB_4HV7c65MNqtA1LJLpdeibc9wWrYS1kHwhz_CM3Yvjw1WRAptQGCEVnQs2m3Ki6Bio8_oDvILuCAm5fR9MK9SwrXM2DkPKtFRdeUilYL&usqp=CAE",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 23,

        count: 1,
      },
      {
        _id: "10",
        title: "Khadi",
        src: "https://img.etimg.com/thumb/msid-79740598,width-300,imgsize-235669,,resizemode-4,quality-100/gettyimages-511945164.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "11",
        title: "Pickles",
        src: "https://www.saggecovillage.earth/wp-content/uploads/2021/02/products-about.png",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "12",
        title: "Pottery",
        src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201612/art-647_120716051516.jpg?size=770:433",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "13",
        title: "Traditional Dresses ",
        src: "https://static.toiimg.com/photo/69039939/1.jpg?width=748&resize=4",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "14",
        title: "Cloth Fans",
        src: "https://editorial01.shutterstock.com/wm-preview-1500/10758791c/5989dcb4/handmade-fans-sadullapur-bangladesh-shutterstock-editorial-10758791c.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "15",
        title: "Bamboo Handicrafts",
        src: "https://www.holidify.com/images/cmsuploads/compressed/800px-Handicrafts_20200701133820.JPG",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "16",
        title: "Pots",
        src: "https://thumbs.dreamstime.com/z/products-earthenware-vases-pots-pottery-village-ceramic-many-items-made-clay-beautiful-protect-68091345.jpg",
        description: "Handmade Goods",
        content:
          "Our handmade products made with gentle care , love and determination with its unique nature will surely bring joy into your lives! ",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
