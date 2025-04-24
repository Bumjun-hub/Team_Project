@ -27,9 +27,10 @@ const ModalComponent = ({ show, onHide }) => {
    </Modal.Header>
    <Modal.Body className='Modalbody'>
        <Modal.Body className='ModalBodyHead'>
            <p>까꿍</p>
            <p></p>
        </Modal.Body>
        <p>
<<<<<<< Updated upstream
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
@ -37,6 +38,10 @@ const ModalComponent = ({ show, onHide }) => {
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum

=======
            <img src="https://placehold.co/600x400" className='MountainImg'/>
            
>>>>>>> Stashed changes
        </p>
        <Button variant="primary" onClick={() => setShowIframe(!showIframe)}>
            {showIframe ? '길찾기' : '길찾기'}
