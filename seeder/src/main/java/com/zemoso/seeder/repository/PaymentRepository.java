package com.zemoso.seeder.repository;

import com.zemoso.seeder.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findByUserIdAndStatusOrderByDueDateDesc(Long userId, Payment.STATUS status);
}
