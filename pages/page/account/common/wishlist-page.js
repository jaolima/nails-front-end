import React, { useContext } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { WishlistContext } from '../../../../helpers/wishlist/WishlistContext';
import CartContext from '../../../../helpers/cart/index';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useTranslation } from "react-i18next";

const WishlistPage = () => {

    const { t } = useTranslation();
    const router = useRouter();
    const context = useContext(WishlistContext)
    const cartContext = useContext(CartContext);

    const wishlist = context.wishlistItems;
    const removeFromWish = context.removeFromWish;
    const addCart = cartContext.addToCart;

    const checkOut = () => {
        router.push('/page/account/checkout');
    }

    return (
        <>
            {wishlist.length >= 0
                ?
                <section className="wishlist-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <Table className="table cart-table table-responsive-xs">
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">{t('image')}</th>
                                            <th scope="col">{t('product name')}</th>
                                            <th scope="col">{t('price')}</th>
                                            <th scope="col">{t('availability')}</th>
                                            <th scope="col">{t('action')}</th>
                                        </tr>
                                    </thead>
                                    {wishlist.map((item, i) =>
                                        <tbody key={i}>
                                            <tr>
                                                <td>
                                                    <a href="#"><img src={item.uri_image} alt="" /></a>
                                                </td>
                                                <td><a href="#">{item.name}</a>
                                                    <Row className="mobile-cart-content">
                                                        <div className="col-xs-3">
                                                            <p>out of stock</p>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{item.price}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color"><a href="#" className="icon mr-1"><i className="fa fa-close"></i>
                                                            </a><a href="#" className="cart"><i className="fa fa-shopping-cart"></i></a></h2>
                                                        </div>
                                                    </Row>
                                                </td>
                                                <td>
                                                    <h2>{item.price}</h2>
                                                </td>
                                                <td>
                                                    <p>{(item.qtd > 0) ? t('In Stock') : t('out of Stock')}</p>
                                                </td>
                                                <td>
                                                    <a href={null} className="icon res-ico" onClick={() => removeFromWish(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                    <a href={null} className="cart res-ico" onClick={() => addCart(item)} >
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </Table>
                            </Col>
                        </Row>
                        <Row className="wishlist-buttons">
                            <Col sm="12">
                                <Link href={'/'}><a href={null} className="btn btn-solid" >{t('continue shopping')}</a></Link>
                                <a href={null} className="btn btn-solid" onClick={checkOut}>{t('check out')}</a>
                            </Col>
                        </Row>
                    </Container>
                </section>
                : ''}

        </>
    )
}

export default WishlistPage;