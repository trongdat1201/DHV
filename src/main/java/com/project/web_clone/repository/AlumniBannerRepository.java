package com.project.web_clone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.web_clone.entity.AlumniBanner;

@Repository
public interface AlumniBannerRepository extends JpaRepository<AlumniBanner, Long> {
}
